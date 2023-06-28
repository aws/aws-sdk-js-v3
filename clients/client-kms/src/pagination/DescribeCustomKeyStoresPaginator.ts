// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeCustomKeyStoresCommand,
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
} from "../commands/DescribeCustomKeyStoresCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof KMSClient) {
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
