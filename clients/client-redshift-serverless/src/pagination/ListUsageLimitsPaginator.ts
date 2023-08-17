// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListUsageLimitsCommand,
  ListUsageLimitsCommandInput,
  ListUsageLimitsCommandOutput,
} from "../commands/ListUsageLimitsCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftServerlessClient,
  input: ListUsageLimitsCommandInput,
  ...args: any
): Promise<ListUsageLimitsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUsageLimitsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListUsageLimits(
  config: RedshiftServerlessPaginationConfiguration,
  input: ListUsageLimitsCommandInput,
  ...additionalArguments: any
): Paginator<ListUsageLimitsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUsageLimitsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RedshiftServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RedshiftServerless | RedshiftServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
