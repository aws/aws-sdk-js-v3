import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import {
  ListLambdaFunctionsCommand,
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
} from "../commands/ListLambdaFunctionsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListLambdaFunctionsCommandInput,
  ...args: any
): Promise<ListLambdaFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLambdaFunctionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListLambdaFunctionsCommandInput,
  ...args: any
): Promise<ListLambdaFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.listLambdaFunctions(input, ...args);
};
export async function* paginateListLambdaFunctions(
  config: ConnectPaginationConfiguration,
  input: ListLambdaFunctionsCommandInput,
  ...additionalArguments: any
): Paginator<ListLambdaFunctionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLambdaFunctionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
