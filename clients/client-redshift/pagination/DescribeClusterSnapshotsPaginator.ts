import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeClusterSnapshotsCommand,
  DescribeClusterSnapshotsCommandInput,
  DescribeClusterSnapshotsCommandOutput,
} from "../commands/DescribeClusterSnapshotsCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterSnapshotsCommandInput,
  ...args: any
): Promise<DescribeClusterSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterSnapshotsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterSnapshotsCommandInput,
  ...args: any
): Promise<DescribeClusterSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterSnapshots(input, ...args);
};
export async function* describeClusterSnapshotsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterSnapshotsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterSnapshotsCommandOutput;
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
