import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";
import {
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
} from "../commands/DescribeTableCommand";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftDataClient,
  input: DescribeTableCommandInput,
  ...args: any
): Promise<DescribeTableCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTableCommand(input), ...args);
};
const makePagedRequest = async (
  client: RedshiftData,
  input: DescribeTableCommandInput,
  ...args: any
): Promise<DescribeTableCommandOutput> => {
  // @ts-ignore
  return await client.describeTable(input, ...args);
};
export async function* describeTablePaginate(
  config: RedshiftDataPaginationConfiguration,
  input: DescribeTableCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTableCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTableCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RedshiftData) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftDataClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RedshiftData | RedshiftDataClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
