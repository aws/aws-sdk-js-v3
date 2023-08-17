// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEntityPersonasCommand,
  ListEntityPersonasCommandInput,
  ListEntityPersonasCommandOutput,
} from "../commands/ListEntityPersonasCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: ListEntityPersonasCommandInput,
  ...args: any
): Promise<ListEntityPersonasCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntityPersonasCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEntityPersonas(
  config: KendraPaginationConfiguration,
  input: ListEntityPersonasCommandInput,
  ...additionalArguments: any
): Paginator<ListEntityPersonasCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntityPersonasCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
