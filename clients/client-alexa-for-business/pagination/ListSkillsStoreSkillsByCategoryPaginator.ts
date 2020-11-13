import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListSkillsStoreSkillsByCategoryCommand,
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
} from "../commands/ListSkillsStoreSkillsByCategoryCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...args: any
): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSkillsStoreSkillsByCategoryCommand(input), ...args);
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...args: any
): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> => {
  // @ts-ignore
  return await client.listSkillsStoreSkillsByCategory(input, ...args);
};
export async function* listSkillsStoreSkillsByCategoryPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...additionalArguments: any
): Paginator<ListSkillsStoreSkillsByCategoryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSkillsStoreSkillsByCategoryCommandOutput;
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
