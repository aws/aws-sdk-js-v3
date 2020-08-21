import { Macie } from "../Macie";
import { MacieClient } from "../MacieClient";
import {
  ListS3ResourcesCommand,
  ListS3ResourcesCommandInput,
  ListS3ResourcesCommandOutput,
} from "../commands/ListS3ResourcesCommand";
import { MaciePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MacieClient,
  input: ListS3ResourcesCommandInput,
  ...args: any
): Promise<ListS3ResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListS3ResourcesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Macie,
  input: ListS3ResourcesCommandInput,
  ...args: any
): Promise<ListS3ResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listS3Resources(input, ...args);
};
export async function* listS3ResourcesPaginate(
  config: MaciePaginationConfiguration,
  input: ListS3ResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListS3ResourcesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListS3ResourcesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MacieClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie | MacieClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
