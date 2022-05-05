// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFunctionUrlConfigsCommand,
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
} from "../commands/ListFunctionUrlConfigsCommand";
import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListFunctionUrlConfigsCommandInput,
  ...args: any
): Promise<ListFunctionUrlConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFunctionUrlConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Lambda,
  input: ListFunctionUrlConfigsCommandInput,
  ...args: any
): Promise<ListFunctionUrlConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listFunctionUrlConfigs(input, ...args);
};
export async function* paginateListFunctionUrlConfigs(
  config: LambdaPaginationConfiguration,
  input: ListFunctionUrlConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListFunctionUrlConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFunctionUrlConfigsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Lambda) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LambdaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Lambda | LambdaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
