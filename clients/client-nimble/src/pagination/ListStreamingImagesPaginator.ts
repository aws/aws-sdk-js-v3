// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListStreamingImagesCommand,
  ListStreamingImagesCommandInput,
  ListStreamingImagesCommandOutput,
} from "../commands/ListStreamingImagesCommand";
import { Nimble } from "../Nimble";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListStreamingImagesCommandInput,
  ...args: any
): Promise<ListStreamingImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamingImagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Nimble,
  input: ListStreamingImagesCommandInput,
  ...args: any
): Promise<ListStreamingImagesCommandOutput> => {
  // @ts-ignore
  return await client.listStreamingImages(input, ...args);
};
export async function* paginateListStreamingImages(
  config: NimblePaginationConfiguration,
  input: ListStreamingImagesCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamingImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamingImagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Nimble) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NimbleClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Nimble | NimbleClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
