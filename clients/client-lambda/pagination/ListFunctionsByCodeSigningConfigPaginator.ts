import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import {
  ListFunctionsByCodeSigningConfigCommand,
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "../commands/ListFunctionsByCodeSigningConfigCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListFunctionsByCodeSigningConfigCommandInput,
  ...args: any
): Promise<ListFunctionsByCodeSigningConfigCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFunctionsByCodeSigningConfigCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Lambda,
  input: ListFunctionsByCodeSigningConfigCommandInput,
  ...args: any
): Promise<ListFunctionsByCodeSigningConfigCommandOutput> => {
  // @ts-ignore
  return await client.listFunctionsByCodeSigningConfig(input, ...args);
};
export async function* paginateListFunctionsByCodeSigningConfig(
  config: LambdaPaginationConfiguration,
  input: ListFunctionsByCodeSigningConfigCommandInput,
  ...additionalArguments: any
): Paginator<ListFunctionsByCodeSigningConfigCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFunctionsByCodeSigningConfigCommandOutput;
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
