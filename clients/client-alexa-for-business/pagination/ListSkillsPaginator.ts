import { AlexaForBusiness } from "../AlexaForBusiness";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import { ListSkillsCommand, ListSkillsCommandInput, ListSkillsCommandOutput } from "../commands/ListSkillsCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListSkillsCommandInput,
  ...args: any
): Promise<ListSkillsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSkillsCommand(input, ...args));
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListSkillsCommandInput,
  ...args: any
): Promise<ListSkillsCommandOutput> => {
  // @ts-ignore
  return await client.listSkills(input, ...args);
};
export async function* listSkillsPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsCommandInput,
  ...additionalArguments: any
): Paginator<ListSkillsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSkillsCommandOutput;
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
