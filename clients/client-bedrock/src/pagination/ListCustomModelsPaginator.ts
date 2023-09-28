// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListCustomModelsCommand,
  ListCustomModelsCommandInput,
  ListCustomModelsCommandOutput,
} from "../commands/ListCustomModelsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BedrockClient,
  input: ListCustomModelsCommandInput,
  ...args: any
): Promise<ListCustomModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomModelsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCustomModels(
  config: BedrockPaginationConfiguration,
  input: ListCustomModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomModelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomModelsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof BedrockClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Bedrock | BedrockClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
