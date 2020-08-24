import { Backup } from "../Backup";
import { BackupClient } from "../BackupClient";
import {
  ListProtectedResourcesCommand,
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "../commands/ListProtectedResourcesCommand";
import { BackupPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: BackupClient,
  input: ListProtectedResourcesCommandInput,
  ...args: any
): Promise<ListProtectedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtectedResourcesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Backup,
  input: ListProtectedResourcesCommandInput,
  ...args: any
): Promise<ListProtectedResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listProtectedResources(input, ...args);
};
export async function* listProtectedResourcesPaginate(
  config: BackupPaginationConfiguration,
  input: ListProtectedResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListProtectedResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListProtectedResourcesCommandOutput;
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
