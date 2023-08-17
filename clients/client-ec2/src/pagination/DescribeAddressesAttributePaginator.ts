// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeAddressesAttributeCommand,
  DescribeAddressesAttributeCommandInput,
  DescribeAddressesAttributeCommandOutput,
} from "../commands/DescribeAddressesAttributeCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeAddressesAttributeCommandInput,
  ...args: any
): Promise<DescribeAddressesAttributeCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAddressesAttributeCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAddressesAttribute(
  config: EC2PaginationConfiguration,
  input: DescribeAddressesAttributeCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAddressesAttributeCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAddressesAttributeCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
