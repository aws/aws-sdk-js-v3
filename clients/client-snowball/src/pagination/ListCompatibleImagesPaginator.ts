// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCompatibleImagesCommand,
  ListCompatibleImagesCommandInput,
  ListCompatibleImagesCommandOutput,
} from "../commands/ListCompatibleImagesCommand";
import { Snowball } from "../Snowball";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SnowballClient,
  input: ListCompatibleImagesCommandInput,
  ...args: any
): Promise<ListCompatibleImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCompatibleImagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Snowball,
  input: ListCompatibleImagesCommandInput,
  ...args: any
): Promise<ListCompatibleImagesCommandOutput> => {
  // @ts-ignore
  return await client.listCompatibleImages(input, ...args);
};
export async function* paginateListCompatibleImages(
  config: SnowballPaginationConfiguration,
  input: ListCompatibleImagesCommandInput,
  ...additionalArguments: any
): Paginator<ListCompatibleImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCompatibleImagesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Snowball) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SnowballClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Snowball | SnowballClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
