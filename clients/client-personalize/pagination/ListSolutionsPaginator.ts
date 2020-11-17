import { Personalize } from "../Personalize";
import { PersonalizeClient } from "../PersonalizeClient";
import {
  ListSolutionsCommand,
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput,
} from "../commands/ListSolutionsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListSolutionsCommandInput,
  ...args: any
): Promise<ListSolutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSolutionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Personalize,
  input: ListSolutionsCommandInput,
  ...args: any
): Promise<ListSolutionsCommandOutput> => {
  // @ts-ignore
  return await client.listSolutions(input, ...args);
};
export async function* paginateListSolutions(
  config: PersonalizePaginationConfiguration,
  input: ListSolutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSolutionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSolutionsCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
