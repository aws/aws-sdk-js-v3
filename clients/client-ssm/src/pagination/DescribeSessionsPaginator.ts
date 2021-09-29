import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeSessionsCommand,
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput,
} from "../commands/DescribeSessionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeSessionsCommandInput,
  ...args: any
): Promise<DescribeSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSessionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeSessionsCommandInput,
  ...args: any
): Promise<DescribeSessionsCommandOutput> => {
  // @ts-ignore
  return await client.describeSessions(input, ...args);
};
export async function* paginateDescribeSessions(
  config: SSMPaginationConfiguration,
  input: DescribeSessionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSessionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSessionsCommandOutput;
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
