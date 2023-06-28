// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeTableRestoreStatusCommand,
  DescribeTableRestoreStatusCommandInput,
  DescribeTableRestoreStatusCommandOutput,
} from "../commands/DescribeTableRestoreStatusCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeTableRestoreStatusCommandInput,
  ...args: any
): Promise<DescribeTableRestoreStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTableRestoreStatusCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeTableRestoreStatus(
  config: RedshiftPaginationConfiguration,
  input: DescribeTableRestoreStatusCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTableRestoreStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTableRestoreStatusCommandOutput;
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
