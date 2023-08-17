// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetTransitGatewayPrefixListReferencesCommand,
  GetTransitGatewayPrefixListReferencesCommandInput,
  GetTransitGatewayPrefixListReferencesCommandOutput,
} from "../commands/GetTransitGatewayPrefixListReferencesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: GetTransitGatewayPrefixListReferencesCommandInput,
  ...args: any
): Promise<GetTransitGatewayPrefixListReferencesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTransitGatewayPrefixListReferencesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetTransitGatewayPrefixListReferences(
  config: EC2PaginationConfiguration,
  input: GetTransitGatewayPrefixListReferencesCommandInput,
  ...additionalArguments: any
): Paginator<GetTransitGatewayPrefixListReferencesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTransitGatewayPrefixListReferencesCommandOutput;
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
