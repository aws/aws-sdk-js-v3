// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeCustomKeyStoresCommand,
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
} from "../commands/DescribeCustomKeyStoresCommand";
import { KMS } from "../KMS";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KMSClient,
  input: DescribeCustomKeyStoresCommandInput,
  ...args: any
): Promise<DescribeCustomKeyStoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCustomKeyStoresCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KMS,
  input: DescribeCustomKeyStoresCommandInput,
  ...args: any
): Promise<DescribeCustomKeyStoresCommandOutput> => {
  // @ts-ignore
  return await client.describeCustomKeyStores(input, ...args);
};
export async function* paginateDescribeCustomKeyStores(
  config: KMSPaginationConfiguration,
  input: DescribeCustomKeyStoresCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCustomKeyStoresCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCustomKeyStoresCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
