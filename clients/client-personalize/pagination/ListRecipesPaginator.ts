import { Personalize } from "../Personalize";
import { PersonalizeClient } from "../PersonalizeClient";
import { ListRecipesCommand, ListRecipesCommandInput, ListRecipesCommandOutput } from "../commands/ListRecipesCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListRecipesCommandInput,
  ...args: any
): Promise<ListRecipesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecipesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Personalize,
  input: ListRecipesCommandInput,
  ...args: any
): Promise<ListRecipesCommandOutput> => {
  // @ts-ignore
  return await client.listRecipes(input, ...args);
};
export async function* listRecipesPaginate(
  config: PersonalizePaginationConfiguration,
  input: ListRecipesCommandInput,
  ...additionalArguments: any
): Paginator<ListRecipesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRecipesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Personalize) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
