// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListComponentOutputsCommand,
  ListComponentOutputsCommandInput,
  ListComponentOutputsCommandOutput,
} from "../commands/ListComponentOutputsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListComponentOutputsCommandInput,
  ...args: any
): Promise<ListComponentOutputsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListComponentOutputsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListComponentOutputs(
  config: ProtonPaginationConfiguration,
  input: ListComponentOutputsCommandInput,
  ...additionalArguments: any
): Paginator<ListComponentOutputsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListComponentOutputsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof ProtonClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Proton | ProtonClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
