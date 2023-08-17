// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListQueryLoggingConfigsCommand,
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "../commands/ListQueryLoggingConfigsCommand";
import { Route53Client } from "../Route53Client";
import { Route53PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Route53Client,
  input: ListQueryLoggingConfigsCommandInput,
  ...args: any
): Promise<ListQueryLoggingConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQueryLoggingConfigsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListQueryLoggingConfigs(
  config: Route53PaginationConfiguration,
  input: ListQueryLoggingConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListQueryLoggingConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQueryLoggingConfigsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53 | Route53Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
