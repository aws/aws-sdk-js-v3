// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListJournalS3ExportsForLedgerCommand,
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput,
} from "../commands/ListJournalS3ExportsForLedgerCommand";
import { QLDBClient } from "../QLDBClient";
import { QLDBPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
