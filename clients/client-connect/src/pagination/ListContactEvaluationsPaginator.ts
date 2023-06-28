// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListContactEvaluationsCommand,
  ListContactEvaluationsCommandInput,
  ListContactEvaluationsCommandOutput,
} from "../commands/ListContactEvaluationsCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListContactEvaluationsCommandInput,
  ...args: any
): Promise<ListContactEvaluationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactEvaluationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListContactEvaluations(
  config: ConnectPaginationConfiguration,
  input: ListContactEvaluationsCommandInput,
  ...additionalArguments: any
): Paginator<ListContactEvaluationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactEvaluationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
