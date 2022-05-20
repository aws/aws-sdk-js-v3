// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListRecoveryPointsByResourceCommand,
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "../commands/ListRecoveryPointsByResourceCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListRecoveryPointsByResourceCommandInput,
  ...args: any
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecoveryPointsByResourceCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListRecoveryPointsByResourceCommandInput,
  ...args: any
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  // @ts-ignore
  return await client.listRecoveryPointsByResource(input, ...args);
};
export async function* paginateListRecoveryPointsByResource(
  config: BackupPaginationConfiguration,
  input: ListRecoveryPointsByResourceCommandInput,
  ...additionalArguments: any
): Paginator<ListRecoveryPointsByResourceCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecoveryPointsByResourceCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
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
