// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTriggersCommand,
  ListTriggersCommandInput,
  ListTriggersCommandOutput,
} from "../commands/ListTriggersCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: ListTriggersCommandInput,
  ...args: any
): Promise<ListTriggersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTriggersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTriggers(
  config: GluePaginationConfiguration,
  input: ListTriggersCommandInput,
  ...additionalArguments: any
): Paginator<ListTriggersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTriggersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
