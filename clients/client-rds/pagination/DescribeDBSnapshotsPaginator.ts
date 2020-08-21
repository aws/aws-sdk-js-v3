import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeDBSnapshotsCommand,
  DescribeDBSnapshotsCommandInput,
  DescribeDBSnapshotsCommandOutput,
} from "../commands/DescribeDBSnapshotsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBSnapshotsCommandInput,
  ...args: any
): Promise<DescribeDBSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBSnapshotsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBSnapshotsCommandInput,
  ...args: any
): Promise<DescribeDBSnapshotsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBSnapshots(input, ...args);
};
export async function* describeDBSnapshotsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBSnapshotsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBSnapshotsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBSnapshotsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
