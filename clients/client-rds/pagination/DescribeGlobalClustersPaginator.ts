import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersCommandInput,
  DescribeGlobalClustersCommandOutput,
} from "../commands/DescribeGlobalClustersCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeGlobalClustersCommandInput,
  ...args: any
): Promise<DescribeGlobalClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeGlobalClustersCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeGlobalClustersCommandInput,
  ...args: any
): Promise<DescribeGlobalClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeGlobalClusters(input, ...args);
};
export async function* describeGlobalClustersPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeGlobalClustersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeGlobalClustersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeGlobalClustersCommandOutput;
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
