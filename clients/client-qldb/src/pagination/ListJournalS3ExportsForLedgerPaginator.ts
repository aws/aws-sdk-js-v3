// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListJournalS3ExportsForLedgerCommand,
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
} from "../commands/ListJournalS3ExportsForLedgerCommand";
import { QLDB } from "../QLDB";
import { QLDBClient } from "../QLDBClient";
import { QLDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QLDBClient,
  input: ListJournalS3ExportsForLedgerCommandInput,
  ...args: any
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJournalS3ExportsForLedgerCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QLDB,
  input: ListJournalS3ExportsForLedgerCommandInput,
  ...args: any
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  // @ts-ignore
  return await client.listJournalS3ExportsForLedger(input, ...args);
};
export async function* paginateListJournalS3ExportsForLedger(
  config: QLDBPaginationConfiguration,
  input: ListJournalS3ExportsForLedgerCommandInput,
  ...additionalArguments: any
): Paginator<ListJournalS3ExportsForLedgerCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJournalS3ExportsForLedgerCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
