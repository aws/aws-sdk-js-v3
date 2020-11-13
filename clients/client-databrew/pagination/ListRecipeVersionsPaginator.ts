import { DataBrew } from "../DataBrew";
import { DataBrewClient } from "../DataBrewClient";
import {
  ListRecipeVersionsCommand,
  ListRecipeVersionsCommandInput,
  ListRecipeVersionsCommandOutput,
} from "../commands/ListRecipeVersionsCommand";
import { DataBrewPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DataBrewClient,
  input: ListRecipeVersionsCommandInput,
  ...args: any
): Promise<ListRecipeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecipeVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DataBrew,
  input: ListRecipeVersionsCommandInput,
  ...args: any
): Promise<ListRecipeVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listRecipeVersions(input, ...args);
};
export async function* listRecipeVersionsPaginate(
  config: DataBrewPaginationConfiguration,
  input: ListRecipeVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListRecipeVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecipeVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataBrew) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataBrewClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataBrew | DataBrewClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
