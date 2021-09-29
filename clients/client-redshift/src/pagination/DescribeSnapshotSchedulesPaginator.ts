import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeSnapshotSchedulesCommand,
  DescribeSnapshotSchedulesCommandInput,
  DescribeSnapshotSchedulesCommandOutput,
} from "../commands/DescribeSnapshotSchedulesCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeSnapshotSchedulesCommandInput,
  ...args: any
): Promise<DescribeSnapshotSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSnapshotSchedulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeSnapshotSchedulesCommandInput,
  ...args: any
): Promise<DescribeSnapshotSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.describeSnapshotSchedules(input, ...args);
};
export async function* paginateDescribeSnapshotSchedules(
  config: RedshiftPaginationConfiguration,
  input: DescribeSnapshotSchedulesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSnapshotSchedulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSnapshotSchedulesCommandOutput;
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
