// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorkloadsCommand,
  ListWorkloadsCommandInput,
  ListWorkloadsCommandOutput,
} from "../commands/ListWorkloadsCommand";
import { LaunchWizardClient } from "../LaunchWizardClient";
import { LaunchWizardPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LaunchWizardClient,
  input: ListWorkloadsCommandInput,
  ...args: any
): Promise<ListWorkloadsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkloadsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkloads(
  config: LaunchWizardPaginationConfiguration,
  input: ListWorkloadsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkloadsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkloadsCommandOutput;
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
