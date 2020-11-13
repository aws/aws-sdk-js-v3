import { DocDB } from "../DocDB";
import { DocDBClient } from "../DocDBClient";
import {
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsCommandInput,
  DescribeDBClusterSnapshotsCommandOutput,
} from "../commands/DescribeDBClusterSnapshotsCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...args: any
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterSnapshotsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DocDB,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...args: any
): Promise<DescribeDBClusterSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusterSnapshots(input, ...args);
};
export async function* describeDBClusterSnapshotsPaginate(
  config: DocDBPaginationConfiguration,
  input: DescribeDBClusterSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterSnapshotsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBClusterSnapshotsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
