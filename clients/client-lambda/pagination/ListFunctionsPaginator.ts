import { Lambda } from "../Lambda";
import { LambdaClient } from "../LambdaClient";
import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "../commands/ListFunctionsCommand";
import { LambdaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListFunctionsCommandInput,
  ...args: any
): Promise<ListFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFunctionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Lambda,
  input: ListFunctionsCommandInput,
  ...args: any
): Promise<ListFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.listFunctions(input, ...args);
};
export async function* paginateListFunctions(
  config: LambdaPaginationConfiguration,
  input: ListFunctionsCommandInput,
  ...additionalArguments: any
): Paginator<ListFunctionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFunctionsCommandOutput;
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
