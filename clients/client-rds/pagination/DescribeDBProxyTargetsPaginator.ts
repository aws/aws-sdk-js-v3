import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeDBProxyTargetsCommand,
  DescribeDBProxyTargetsCommandInput,
  DescribeDBProxyTargetsCommandOutput,
} from "../commands/DescribeDBProxyTargetsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBProxyTargetsCommandInput,
  ...args: any
): Promise<DescribeDBProxyTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBProxyTargetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBProxyTargetsCommandInput,
  ...args: any
): Promise<DescribeDBProxyTargetsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBProxyTargets(input, ...args);
};
export async function* describeDBProxyTargetsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBProxyTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBProxyTargetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBProxyTargetsCommandOutput;
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
