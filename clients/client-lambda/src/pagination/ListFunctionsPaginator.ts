// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "../commands/ListFunctionsCommand";
import { LambdaClient } from "../LambdaClient";
import { LambdaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof LambdaClient) {
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
