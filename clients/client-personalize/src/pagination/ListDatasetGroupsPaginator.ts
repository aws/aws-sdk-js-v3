// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDatasetGroupsCommand,
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput,
} from "../commands/ListDatasetGroupsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListDatasetGroupsCommandInput,
  ...args: any
): Promise<ListDatasetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDatasetGroups(
  config: PersonalizePaginationConfiguration,
  input: ListDatasetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetGroupsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof PersonalizeClient) {
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
