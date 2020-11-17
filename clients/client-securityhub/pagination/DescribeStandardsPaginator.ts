import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import {
  DescribeStandardsCommand,
  DescribeStandardsCommandInput,
  DescribeStandardsCommandOutput,
} from "../commands/DescribeStandardsCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: DescribeStandardsCommandInput,
  ...args: any
): Promise<DescribeStandardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStandardsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SecurityHub,
  input: DescribeStandardsCommandInput,
  ...args: any
): Promise<DescribeStandardsCommandOutput> => {
  // @ts-ignore
  return await client.describeStandards(input, ...args);
};
export async function* paginateDescribeStandards(
  config: SecurityHubPaginationConfiguration,
  input: DescribeStandardsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStandardsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeStandardsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
