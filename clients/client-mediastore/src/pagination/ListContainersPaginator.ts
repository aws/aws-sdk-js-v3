// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListContainersCommand,
  ListContainersCommandInput,
  ListContainersCommandOutput,
} from "../commands/ListContainersCommand";
import { MediaStoreClient } from "../MediaStoreClient";
import { MediaStorePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaStoreClient,
  input: ListContainersCommandInput,
  ...args: any
): Promise<ListContainersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContainersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListContainers(
  config: MediaStorePaginationConfiguration,
  input: ListContainersCommandInput,
  ...additionalArguments: any
): Paginator<ListContainersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContainersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaStoreClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaStore | MediaStoreClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
