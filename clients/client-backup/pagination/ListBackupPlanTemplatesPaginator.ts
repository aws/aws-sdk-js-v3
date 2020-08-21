import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListBackupPlanTemplatesCommand,
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "../commands/ListBackupPlanTemplatesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListBackupPlanTemplatesCommandInput,
  ...args: any
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBackupPlanTemplatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Backup,
  input: ListBackupPlanTemplatesCommandInput,
  ...args: any
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listBackupPlanTemplates(input, ...args);
};
export async function* listBackupPlanTemplatesPaginate(
  config: BackupPaginationConfiguration,
  input: ListBackupPlanTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListBackupPlanTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListBackupPlanTemplatesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Backup) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BackupClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Backup | BackupClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
