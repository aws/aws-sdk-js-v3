// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFraudstersCommand,
  ListFraudstersCommandInput,
  ListFraudstersCommandOutput,
} from "../commands/ListFraudstersCommand";
import { VoiceIDClient } from "../VoiceIDClient";
import { VoiceIDPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: VoiceIDClient,
  input: ListFraudstersCommandInput,
  ...args: any
): Promise<ListFraudstersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFraudstersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFraudsters(
  config: VoiceIDPaginationConfiguration,
  input: ListFraudstersCommandInput,
  ...additionalArguments: any
): Paginator<ListFraudstersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFraudstersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof VoiceIDClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected VoiceID | VoiceIDClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
