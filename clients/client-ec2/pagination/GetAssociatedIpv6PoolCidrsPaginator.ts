import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  GetAssociatedIpv6PoolCidrsCommand,
  GetAssociatedIpv6PoolCidrsCommandInput,
  GetAssociatedIpv6PoolCidrsCommandOutput,
} from "../commands/GetAssociatedIpv6PoolCidrsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: GetAssociatedIpv6PoolCidrsCommandInput,
  ...args: any
): Promise<GetAssociatedIpv6PoolCidrsCommandOutput> => {
  // @ts-ignore
  return await client.getAssociatedIpv6PoolCidrs(input, ...args);
};
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
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
