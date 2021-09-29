import { MediaLive } from "../MediaLive";
import { MediaLiveClient } from "../MediaLiveClient";
import { ListInputsCommand, ListInputsCommandInput, ListInputsCommandOutput } from "../commands/ListInputsCommand";
import { MediaLivePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: MediaLive,
  input: ListInputsCommandInput,
  ...args: any
): Promise<ListInputsCommandOutput> => {
  // @ts-ignore
  return await client.listInputs(input, ...args);
};
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
    if (config.client instanceof MediaLive) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaLiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaLive | MediaLiveClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
