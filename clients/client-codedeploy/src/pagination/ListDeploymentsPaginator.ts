// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeDeploy } from "../CodeDeploy";
import { CodeDeployClient } from "../CodeDeployClient";
import {
  ListDeploymentsCommand,
  ListDeploymentsCommandInput,
  ListDeploymentsCommandOutput,
} from "../commands/ListDeploymentsCommand";
import { CodeDeployPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeDeployClient,
  input: ListDeploymentsCommandInput,
  ...args: any
): Promise<ListDeploymentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeploymentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeDeploy,
  input: ListDeploymentsCommandInput,
  ...args: any
): Promise<ListDeploymentsCommandOutput> => {
  // @ts-ignore
  return await client.listDeployments(input, ...args);
};
export async function* paginateListDeployments(
  config: CodeDeployPaginationConfiguration,
  input: ListDeploymentsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeploymentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeploymentsCommandOutput;
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
