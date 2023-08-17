// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetAssociatedIpv6PoolCidrsCommand,
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput,
} from "../commands/GetAssociatedIpv6PoolCidrsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: GetAssociatedIpv6PoolCidrsCommandInput,
  ...args: any
): Promise<GetAssociatedIpv6PoolCidrsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAssociatedIpv6PoolCidrsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetAssociatedIpv6PoolCidrs(
  config: EC2PaginationConfiguration,
  input: GetAssociatedIpv6PoolCidrsCommandInput,
  ...additionalArguments: any
): Paginator<GetAssociatedIpv6PoolCidrsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAssociatedIpv6PoolCidrsCommandOutput;
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
