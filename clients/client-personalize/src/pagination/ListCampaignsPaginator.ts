// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCampaignsCommand,
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput,
} from "../commands/ListCampaignsCommand";
import { Personalize } from "../Personalize";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PersonalizeClient,
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
  client: Personalize,
  input: ListCampaignsCommandInput,
  ...args: any
): Promise<ListCampaignsCommandOutput> => {
  // @ts-ignore
  return await client.listCampaigns(input, ...args);
};
export async function* paginateListCampaigns(
  config: PersonalizePaginationConfiguration,
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
    if (config.client instanceof Personalize) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
