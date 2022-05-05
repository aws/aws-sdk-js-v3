// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeDeploy } from "../CodeDeploy";
import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentGroupsCommand,
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput,
} from "../commands/ListDeploymentGroupsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentGroupsCommandInput,
  ...args: any
): Promise<ListDeploymentGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListDeploymentGroupsCommandInput,
  ...args: any
): Promise<ListDeploymentGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentGroups(input, ...args);
};
export async function* paginateListDeploymentGroups(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentGroupsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof CodeDeploy) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeDeployClient) {
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
