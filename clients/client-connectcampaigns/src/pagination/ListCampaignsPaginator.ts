// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "../commands/ListCampaignsCommand";
import { ConnectCampaigns } from "../ConnectCampaigns";
import { ConnectCampaignsClient } from "../ConnectCampaignsClient";
import { ConnectCampaignsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectCampaignsClient,
  input: ListCampaignsCommandInput,
  ...args: any
): Promise<ListCampaignsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCampaignsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConnectCampaigns,
  input: ListCampaignsCommandInput,
  ...args: any
): Promise<ListCampaignsCommandOutput> => {
  // @ts-ignore
  return await client.listCampaigns(input, ...args);
};
export async function* paginateListCampaigns(
  config: ConnectCampaignsPaginationConfiguration,
  input: ListCampaignsCommandInput,
  ...additionalArguments: any
): Paginator<ListCampaignsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCampaignsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ConnectCampaigns) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectCampaignsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConnectCampaigns | ConnectCampaignsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
