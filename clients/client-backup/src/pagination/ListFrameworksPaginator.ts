import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListFrameworksCommand,
  ListFrameworksCommandInput,
  ListFrameworksCommandOutput,
} from "../commands/ListFrameworksCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: BackupClient,
  input: ListFrameworksCommandInput,
  ...args: any
): Promise<ListFrameworksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFrameworksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Backup,
  input: ListFrameworksCommandInput,
  ...args: any
): Promise<ListFrameworksCommandOutput> => {
  // @ts-ignore
  return await client.listFrameworks(input, ...args);
};
export async function* paginateListFrameworks(
  config: BackupPaginationConfiguration,
  input: ListFrameworksCommandInput,
  ...additionalArguments: any
): Paginator<ListFrameworksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFrameworksCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
