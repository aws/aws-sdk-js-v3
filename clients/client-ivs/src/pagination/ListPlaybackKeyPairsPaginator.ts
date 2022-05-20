// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPlaybackKeyPairsCommand,
  ListPlaybackKeyPairsCommandInput,
  ListPlaybackKeyPairsCommandOutput,
} from "../commands/ListPlaybackKeyPairsCommand";
import { Ivs } from "../Ivs";
import { IvsClient } from "../IvsClient";
import { IvsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IvsClient,
  input: ListPlaybackKeyPairsCommandInput,
  ...args: any
): Promise<ListPlaybackKeyPairsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlaybackKeyPairsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Ivs,
  input: ListPlaybackKeyPairsCommandInput,
  ...args: any
): Promise<ListPlaybackKeyPairsCommandOutput> => {
  // @ts-ignore
  return await client.listPlaybackKeyPairs(input, ...args);
};
export async function* paginateListPlaybackKeyPairs(
  config: IvsPaginationConfiguration,
  input: ListPlaybackKeyPairsCommandInput,
  ...additionalArguments: any
): Paginator<ListPlaybackKeyPairsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPlaybackKeyPairsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Ivs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IvsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Ivs | IvsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
