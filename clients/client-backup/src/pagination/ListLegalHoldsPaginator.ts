// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListLegalHoldsCommand,
  ListLegalHoldsCommandInput,
  ListLegalHoldsCommandOutput,
} from "../commands/ListLegalHoldsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListLegalHoldsCommandInput,
  ...args: any
): Promise<ListLegalHoldsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLegalHoldsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLegalHolds(
  config: BackupPaginationConfiguration,
  input: ListLegalHoldsCommandInput,
  ...additionalArguments: any
): Paginator<ListLegalHoldsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLegalHoldsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
