import { QLDB } from "../QLDB";
import { QLDBClient } from "../QLDBClient";
import {
  ListJournalKinesisStreamsForLedgerCommand,
  ListJournalKinesisStreamsForLedgerCommandInput,
  ListJournalKinesisStreamsForLedgerCommandOutput,
} from "../commands/ListJournalKinesisStreamsForLedgerCommand";
import { QLDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: QLDB,
  input: ListJournalKinesisStreamsForLedgerCommandInput,
  ...args: any
): Promise<ListJournalKinesisStreamsForLedgerCommandOutput> => {
  // @ts-ignore
  return await client.listJournalKinesisStreamsForLedger(input, ...args);
};
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
    if (config.client instanceof QLDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QLDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QLDB | QLDBClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
