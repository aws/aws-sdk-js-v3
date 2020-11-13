import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  SearchSkillGroupsCommand,
  SearchSkillGroupsCommandInput,
  SearchSkillGroupsCommandOutput,
} from "../commands/SearchSkillGroupsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchSkillGroupsCommandInput,
  ...args: any
): Promise<SearchSkillGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchSkillGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchSkillGroupsCommandInput,
  ...args: any
): Promise<SearchSkillGroupsCommandOutput> => {
  // @ts-ignore
  return await client.searchSkillGroups(input, ...args);
};
export async function* searchSkillGroupsPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchSkillGroupsCommandInput,
  ...additionalArguments: any
): Paginator<SearchSkillGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
