// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDomainDeliverabilityCampaignsCommand,
  ListDomainDeliverabilityCampaignsCommandInput,
  ListDomainDeliverabilityCampaignsCommandOutput,
} from "../commands/ListDomainDeliverabilityCampaignsCommand";
import { PinpointEmail } from "../PinpointEmail";
import { PinpointEmailClient } from "../PinpointEmailClient";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: ListDomainDeliverabilityCampaignsCommandInput,
  ...args: any
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainDeliverabilityCampaignsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: PinpointEmail,
  input: ListDomainDeliverabilityCampaignsCommandInput,
  ...args: any
): Promise<ListDomainDeliverabilityCampaignsCommandOutput> => {
  // @ts-ignore
  return await client.listDomainDeliverabilityCampaigns(input, ...args);
};
export async function* paginateListDomainDeliverabilityCampaigns(
  config: PinpointEmailPaginationConfiguration,
  input: ListDomainDeliverabilityCampaignsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainDeliverabilityCampaignsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainDeliverabilityCampaignsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
