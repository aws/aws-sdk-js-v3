import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeEventsCommandInput,
  ...args: any
): Promise<DescribeEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeEventsCommandInput,
  ...args: any
): Promise<DescribeEventsCommandOutput> => {
  // @ts-ignore
  return await client.describeEvents(input, ...args);
};
export async function* paginateDescribeEvents(
  config: RDSPaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEventsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
