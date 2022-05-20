// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListMeetingsCommand,
  ListMeetingsCommandInput,
  ListMeetingsCommandOutput,
} from "../commands/ListMeetingsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListMeetingsCommandInput,
  ...args: any
): Promise<ListMeetingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMeetingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Chime,
  input: ListMeetingsCommandInput,
  ...args: any
): Promise<ListMeetingsCommandOutput> => {
  // @ts-ignore
  return await client.listMeetings(input, ...args);
};
export async function* paginateListMeetings(
  config: ChimePaginationConfiguration,
  input: ListMeetingsCommandInput,
  ...additionalArguments: any
): Paginator<ListMeetingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMeetingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
