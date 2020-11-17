import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  GetParameterHistoryCommand,
  GetParameterHistoryCommandInput,
  GetParameterHistoryCommandOutput,
} from "../commands/GetParameterHistoryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: GetParameterHistoryCommandInput,
  ...args: any
): Promise<GetParameterHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetParameterHistoryCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: GetParameterHistoryCommandInput,
  ...args: any
): Promise<GetParameterHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getParameterHistory(input, ...args);
};
export async function* paginateGetParameterHistory(
  config: SSMPaginationConfiguration,
  input: GetParameterHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetParameterHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetParameterHistoryCommandOutput;
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
