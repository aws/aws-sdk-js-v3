import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import {
  DescribeClusterTracksCommand,
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput,
} from "../commands/DescribeClusterTracksCommand";
import { RedshiftPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterTracksCommandInput,
  ...args: any
): Promise<DescribeClusterTracksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterTracksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterTracksCommandInput,
  ...args: any
): Promise<DescribeClusterTracksCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterTracks(input, ...args);
};
export async function* paginateDescribeClusterTracks(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterTracksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterTracksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeClusterTracksCommandOutput;
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
