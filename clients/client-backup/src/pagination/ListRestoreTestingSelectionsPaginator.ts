// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRestoreTestingSelectionsCommand,
  ListRestoreTestingSelectionsCommandInput,
  ListRestoreTestingSelectionsCommandOutput,
} from "../commands/ListRestoreTestingSelectionsCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListRestoreTestingSelectionsCommandInput,
  ...args: any
): Promise<ListRestoreTestingSelectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRestoreTestingSelectionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRestoreTestingSelections(
  config: BackupPaginationConfiguration,
  input: ListRestoreTestingSelectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListRestoreTestingSelectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRestoreTestingSelectionsCommandOutput;
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
