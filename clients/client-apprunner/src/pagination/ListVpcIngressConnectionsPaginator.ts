// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AppRunner } from "../AppRunner";
import { AppRunnerClient } from "../AppRunnerClient";
import {
  ListVpcIngressConnectionsCommand,
  ListVpcIngressConnectionsCommandInput,
  ListVpcIngressConnectionsCommandOutput,
} from "../commands/ListVpcIngressConnectionsCommand";
import { AppRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppRunnerClient,
  input: ListVpcIngressConnectionsCommandInput,
  ...args: any
): Promise<ListVpcIngressConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVpcIngressConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppRunner,
  input: ListVpcIngressConnectionsCommandInput,
  ...args: any
): Promise<ListVpcIngressConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.listVpcIngressConnections(input, ...args);
};
export async function* paginateListVpcIngressConnections(
  config: AppRunnerPaginationConfiguration,
  input: ListVpcIngressConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListVpcIngressConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVpcIngressConnectionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppRunner) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppRunnerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppRunner | AppRunnerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
