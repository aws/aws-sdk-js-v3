// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeReservedNodesCommand,
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "../commands/DescribeReservedNodesCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeReservedNodesCommandInput,
  ...args: any
): Promise<DescribeReservedNodesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedNodesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeReservedNodes(
  config: RedshiftPaginationConfiguration,
  input: DescribeReservedNodesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedNodesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedNodesCommandOutput;
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
