// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListBonusPaymentsCommand,
  ListBonusPaymentsCommandInput,
  ListBonusPaymentsCommandOutput,
} from "../commands/ListBonusPaymentsCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListBonusPaymentsCommandInput,
  ...args: any
): Promise<ListBonusPaymentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBonusPaymentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBonusPayments(
  config: MTurkPaginationConfiguration,
  input: ListBonusPaymentsCommandInput,
  ...additionalArguments: any
): Paginator<ListBonusPaymentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBonusPaymentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
