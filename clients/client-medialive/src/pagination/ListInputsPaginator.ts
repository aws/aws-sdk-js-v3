// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListInputsCommand, ListInputsCommandInput, ListInputsCommandOutput } from "../commands/ListInputsCommand";
import { MediaLiveClient } from "../MediaLiveClient";
import { MediaLivePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MediaLiveClient,
  input: ListInputsCommandInput,
  ...args: any
): Promise<ListInputsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInputsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListInputs(
  config: MediaLivePaginationConfiguration,
  input: ListInputsCommandInput,
  ...additionalArguments: any
): Paginator<ListInputsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInputsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaLiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaLive | MediaLiveClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
