import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeReservedNodesCommand,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "../commands/DescribeReservedNodesCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeReservedNodesCommandInput,
  ...args: any
): Promise<DescribeReservedNodesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedNodesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeReservedNodesCommandInput,
  ...args: any
): Promise<DescribeReservedNodesCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedNodes(input, ...args);
};
export async function* describeReservedNodesPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeReservedNodesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedNodesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedNodesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
