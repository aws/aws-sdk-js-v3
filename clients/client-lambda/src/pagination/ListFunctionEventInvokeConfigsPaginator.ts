import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import {
  ListFunctionEventInvokeConfigsCommand,
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
} from "../commands/ListFunctionEventInvokeConfigsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListFunctionEventInvokeConfigsCommandInput,
  ...args: any
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFunctionEventInvokeConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Lambda,
  input: ListFunctionEventInvokeConfigsCommandInput,
  ...args: any
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listFunctionEventInvokeConfigs(input, ...args);
};
export async function* paginateListFunctionEventInvokeConfigs(
  config: LambdaPaginationConfiguration,
  input: ListFunctionEventInvokeConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListFunctionEventInvokeConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFunctionEventInvokeConfigsCommandOutput;
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
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
