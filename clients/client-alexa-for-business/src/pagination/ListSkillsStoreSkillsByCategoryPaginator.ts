// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AlexaForBusinessClient } from "../AlexaForBusinessClient";
import {
  ListSkillsStoreSkillsByCategoryCommand,
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
} from "../commands/ListSkillsStoreSkillsByCategoryCommand";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...args: any
): Promise<ListSkillsStoreSkillsByCategoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSkillsStoreSkillsByCategoryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSkillsStoreSkillsByCategory(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListSkillsStoreSkillsByCategoryCommandInput,
  ...additionalArguments: any
): Paginator<ListSkillsStoreSkillsByCategoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSkillsStoreSkillsByCategoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusinessClient) {
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
