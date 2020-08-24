import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListSkillsStoreCategoriesCommand,
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput,
} from "../commands/ListSkillsStoreCategoriesCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListSkillsStoreCategoriesCommandInput,
  ...args: any
): Promise<ListSkillsStoreCategoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSkillsStoreCategoriesCommand(input, ...args));
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListSkillsStoreCategoriesCommandInput,
  ...args: any
): Promise<ListSkillsStoreCategoriesCommandOutput> => {
  // @ts-ignore
  return await client.listSkillsStoreCategories(input, ...args);
};
export async function* listSkillsStoreCategoriesPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsStoreCategoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListSkillsStoreCategoriesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSkillsStoreCategoriesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
