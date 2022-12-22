// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListPipesCommand, ListPipesCommandInput, ListPipesCommandOutput } from "../commands/ListPipesCommand";
import { Pipes } from "../Pipes";
import { PipesClient } from "../PipesClient";
import { PipesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PipesClient,
  input: ListPipesCommandInput,
  ...args: any
): Promise<ListPipesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPipesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Pipes,
  input: ListPipesCommandInput,
  ...args: any
): Promise<ListPipesCommandOutput> => {
  // @ts-ignore
  return await client.listPipes(input, ...args);
};
export async function* paginateListPipes(
  config: PipesPaginationConfiguration,
  input: ListPipesCommandInput,
  ...additionalArguments: any
): Paginator<ListPipesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPipesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof Pipes) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PipesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Pipes | PipesClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
