// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentInstancesCommand,
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
} from "../commands/ListDeploymentInstancesCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentInstancesCommandInput,
  ...args: any
): Promise<ListDeploymentInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentInstancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDeploymentInstances(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentInstancesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeDeployClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeDeploy | CodeDeployClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
