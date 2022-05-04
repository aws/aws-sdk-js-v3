// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchSkillGroupsCommand,
  SearchSkillGroupsCommandInput,
  SearchSkillGroupsCommandOutput,
} from "../commands/SearchSkillGroupsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchSkillGroupsCommandInput,
  ...args: any
): Promise<SearchSkillGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchSkillGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchSkillGroupsCommandInput,
  ...args: any
): Promise<SearchSkillGroupsCommandOutput> => {
  // @ts-ignore
  return await client.searchSkillGroups(input, ...args);
};
export async function* paginateSearchSkillGroups(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchSkillGroupsCommandInput,
  ...additionalArguments: any
): Paginator<SearchSkillGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchSkillGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
