// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTerminologiesCommand,
  ListTerminologiesCommandInput,
  ListTerminologiesCommandOutput,
} from "../commands/ListTerminologiesCommand";
import { TranslateClient } from "../TranslateClient";
import { TranslatePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TranslateClient,
  input: ListTerminologiesCommandInput,
  ...args: any
): Promise<ListTerminologiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTerminologiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTerminologies(
  config: TranslatePaginationConfiguration,
  input: ListTerminologiesCommandInput,
  ...additionalArguments: any
): Paginator<ListTerminologiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTerminologiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TranslateClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Translate | TranslateClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
