import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "../commands/DescribeDBClusterSnapshotsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...args: any
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterSnapshotsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...args: any
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusterSnapshots(input, ...args);
};
export async function* describeDBClusterSnapshotsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterSnapshotsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBClusterSnapshotsCommandOutput;
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
