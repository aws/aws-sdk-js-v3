// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListJournalS3ExportsCommand,
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput,
} from "../commands/ListJournalS3ExportsCommand";
import { QLDBClient } from "../QLDBClient";
import { QLDBPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QLDBClient,
  input: ListJournalS3ExportsCommandInput,
  ...args: any
): Promise<ListJournalS3ExportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJournalS3ExportsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListJournalS3Exports(
  config: QLDBPaginationConfiguration,
  input: ListJournalS3ExportsCommandInput,
  ...additionalArguments: any
): Paginator<ListJournalS3ExportsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJournalS3ExportsCommandOutput;
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
