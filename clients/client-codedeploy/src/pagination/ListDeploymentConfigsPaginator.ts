// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeDeploy } from "../CodeDeploy";
import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentConfigsCommand,
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput,
} from "../commands/ListDeploymentConfigsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentConfigsCommandInput,
  ...args: any
): Promise<ListDeploymentConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListDeploymentConfigsCommandInput,
  ...args: any
): Promise<ListDeploymentConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listDeploymentConfigs(input, ...args);
};
export async function* paginateListDeploymentConfigs(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentConfigsCommandOutput;
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
