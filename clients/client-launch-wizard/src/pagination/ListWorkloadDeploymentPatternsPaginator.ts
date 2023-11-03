// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorkloadDeploymentPatternsCommand,
  ListWorkloadDeploymentPatternsCommandInput,
  ListWorkloadDeploymentPatternsCommandOutput,
} from "../commands/ListWorkloadDeploymentPatternsCommand";
import { LaunchWizardClient } from "../LaunchWizardClient";
import { LaunchWizardPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LaunchWizardClient,
  input: ListWorkloadDeploymentPatternsCommandInput,
  ...args: any
): Promise<ListWorkloadDeploymentPatternsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkloadDeploymentPatternsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkloadDeploymentPatterns(
  config: LaunchWizardPaginationConfiguration,
  input: ListWorkloadDeploymentPatternsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkloadDeploymentPatternsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkloadDeploymentPatternsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof LaunchWizardClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LaunchWizard | LaunchWizardClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
