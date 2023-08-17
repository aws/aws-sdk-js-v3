// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListServiceInstanceOutputsCommand,
  ListServiceInstanceOutputsCommandInput,
  ListServiceInstanceOutputsCommandOutput,
} from "../commands/ListServiceInstanceOutputsCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListServiceInstanceOutputsCommandInput,
  ...args: any
): Promise<ListServiceInstanceOutputsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceInstanceOutputsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListServiceInstanceOutputs(
  config: ProtonPaginationConfiguration,
  input: ListServiceInstanceOutputsCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceInstanceOutputsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServiceInstanceOutputsCommandOutput;
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
