// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListProtectedResourcesCommand,
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "../commands/ListProtectedResourcesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListProtectedResourcesCommandInput,
  ...args: any
): Promise<ListProtectedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtectedResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListProtectedResourcesCommandInput,
  ...args: any
): Promise<ListProtectedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listProtectedResources(input, ...args);
};
export async function* paginateListProtectedResources(
  config: BackupPaginationConfiguration,
  input: ListProtectedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListProtectedResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProtectedResourcesCommandOutput;
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
