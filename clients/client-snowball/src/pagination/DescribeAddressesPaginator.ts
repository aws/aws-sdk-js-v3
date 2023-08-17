// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeAddressesCommand,
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
} from "../commands/DescribeAddressesCommand";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SnowballClient,
  input: DescribeAddressesCommandInput,
  ...args: any
): Promise<DescribeAddressesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAddressesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAddresses(
  config: SnowballPaginationConfiguration,
  input: DescribeAddressesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAddressesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAddressesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SnowballClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Snowball | SnowballClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
