// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListResourceTagsCommand,
  ListResourceTagsCommandInput,
  ListResourceTagsCommandOutput,
} from "../commands/ListResourceTagsCommand";
import { KMSClient } from "../KMSClient";
import { KMSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KMSClient,
  input: ListResourceTagsCommandInput,
  ...args: any
): Promise<ListResourceTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceTagsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListResourceTags(
  config: KMSPaginationConfiguration,
  input: ListResourceTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceTagsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof KMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KMS | KMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
