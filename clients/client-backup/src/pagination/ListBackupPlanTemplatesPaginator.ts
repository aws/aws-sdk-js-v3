// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListBackupPlanTemplatesCommand,
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "../commands/ListBackupPlanTemplatesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupPlanTemplatesCommandInput,
  ...args: any
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupPlanTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListBackupPlanTemplatesCommandInput,
  ...args: any
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listBackupPlanTemplates(input, ...args);
};
export async function* paginateListBackupPlanTemplates(
  config: BackupPaginationConfiguration,
  input: ListBackupPlanTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupPlanTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBackupPlanTemplatesCommandOutput;
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
