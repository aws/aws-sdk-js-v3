// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeClusterTracksCommand,
  DescribeClusterTracksCommandInput,
  DescribeClusterTracksCommandOutput,
} from "../commands/DescribeClusterTracksCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
