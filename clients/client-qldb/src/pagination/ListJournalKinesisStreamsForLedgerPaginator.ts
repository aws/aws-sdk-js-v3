// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListJournalKinesisStreamsForLedgerCommand,
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput,
} from "../commands/ListJournalKinesisStreamsForLedgerCommand";
import { QLDBClient } from "../QLDBClient";
import { QLDBPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QLDBClient,
  input: ListJournalKinesisStreamsForLedgerCommandInput,
  ...args: any
): Promise<ListJournalKinesisStreamsForLedgerCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJournalKinesisStreamsForLedgerCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListJournalKinesisStreamsForLedger(
  config: QLDBPaginationConfiguration,
  input: ListJournalKinesisStreamsForLedgerCommandInput,
  ...additionalArguments: any
): Paginator<ListJournalKinesisStreamsForLedgerCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJournalKinesisStreamsForLedgerCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QLDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QLDB | QLDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
