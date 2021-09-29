import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  GetParametersByPathCommand,
  GetParametersByPathCommandInput,
  GetParametersByPathCommandOutput,
} from "../commands/GetParametersByPathCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: GetParametersByPathCommandInput,
  ...args: any
): Promise<GetParametersByPathCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetParametersByPathCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: GetParametersByPathCommandInput,
  ...args: any
): Promise<GetParametersByPathCommandOutput> => {
  // @ts-ignore
  return await client.getParametersByPath(input, ...args);
};
export async function* paginateGetParametersByPath(
  config: SSMPaginationConfiguration,
  input: GetParametersByPathCommandInput,
  ...additionalArguments: any
): Paginator<GetParametersByPathCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetParametersByPathCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
