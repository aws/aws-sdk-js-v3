import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  GetOpsSummaryCommand,
  GetOpsSummaryCommandInput,
  GetOpsSummaryCommandOutput,
} from "../commands/GetOpsSummaryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: GetOpsSummaryCommandInput,
  ...args: any
): Promise<GetOpsSummaryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetOpsSummaryCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: GetOpsSummaryCommandInput,
  ...args: any
): Promise<GetOpsSummaryCommandOutput> => {
  // @ts-ignore
  return await client.getOpsSummary(input, ...args);
};
export async function* paginateGetOpsSummary(
  config: SSMPaginationConfiguration,
  input: GetOpsSummaryCommandInput,
  ...additionalArguments: any
): Paginator<GetOpsSummaryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetOpsSummaryCommandOutput;
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
