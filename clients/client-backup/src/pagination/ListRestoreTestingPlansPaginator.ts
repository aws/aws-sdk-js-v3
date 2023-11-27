// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BackupClient } from "../BackupClient";
import {
  ListRestoreTestingPlansCommand,
  ListRestoreTestingPlansCommandInput,
  ListRestoreTestingPlansCommandOutput,
} from "../commands/ListRestoreTestingPlansCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListRestoreTestingPlansCommandInput,
  ...args: any
): Promise<ListRestoreTestingPlansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRestoreTestingPlansCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRestoreTestingPlans(
  config: BackupPaginationConfiguration,
  input: ListRestoreTestingPlansCommandInput,
  ...additionalArguments: any
): Paginator<ListRestoreTestingPlansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRestoreTestingPlansCommandOutput;
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
