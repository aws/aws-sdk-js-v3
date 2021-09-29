import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  GetUserDefinedFunctionsCommand,
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
} from "../commands/GetUserDefinedFunctionsCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetUserDefinedFunctionsCommandInput,
  ...args: any
): Promise<GetUserDefinedFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUserDefinedFunctionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Glue,
  input: GetUserDefinedFunctionsCommandInput,
  ...args: any
): Promise<GetUserDefinedFunctionsCommandOutput> => {
  // @ts-ignore
  return await client.getUserDefinedFunctions(input, ...args);
};
export async function* paginateGetUserDefinedFunctions(
  config: GluePaginationConfiguration,
  input: GetUserDefinedFunctionsCommandInput,
  ...additionalArguments: any
): Paginator<GetUserDefinedFunctionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetUserDefinedFunctionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
