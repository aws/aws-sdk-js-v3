import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeSourceRegionsCommand,
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
} from "../commands/DescribeSourceRegionsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeSourceRegionsCommandInput,
  ...args: any
): Promise<DescribeSourceRegionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSourceRegionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeSourceRegionsCommandInput,
  ...args: any
): Promise<DescribeSourceRegionsCommandOutput> => {
  // @ts-ignore
  return await client.describeSourceRegions(input, ...args);
};
export async function* paginateDescribeSourceRegions(
  config: RDSPaginationConfiguration,
  input: DescribeSourceRegionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSourceRegionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSourceRegionsCommandOutput;
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
