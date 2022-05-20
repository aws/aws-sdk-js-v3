// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeReservedNodeExchangeStatusCommand,
  DescribeReservedNodeExchangeStatusCommandInput,
  DescribeReservedNodeExchangeStatusCommandOutput,
} from "../commands/DescribeReservedNodeExchangeStatusCommand";
import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeReservedNodeExchangeStatusCommandInput,
  ...args: any
): Promise<DescribeReservedNodeExchangeStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedNodeExchangeStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Redshift,
  input: DescribeReservedNodeExchangeStatusCommandInput,
  ...args: any
): Promise<DescribeReservedNodeExchangeStatusCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedNodeExchangeStatus(input, ...args);
};
export async function* paginateDescribeReservedNodeExchangeStatus(
  config: RedshiftPaginationConfiguration,
  input: DescribeReservedNodeExchangeStatusCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedNodeExchangeStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedNodeExchangeStatusCommandOutput;
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
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
