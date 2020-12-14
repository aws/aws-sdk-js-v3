import { Macie } from "../Macie";
import { MacieClient } from "../MacieClient";
import {
  ListS3ResourcesCommand,
  ListS3ResourcesCommandInput,
  ListS3ResourcesCommandOutput,
} from "../commands/ListS3ResourcesCommand";
import { MaciePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MacieClient,
  input: ListS3ResourcesCommandInput,
  ...args: any
): Promise<ListS3ResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListS3ResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Macie,
  input: ListS3ResourcesCommandInput,
  ...args: any
): Promise<ListS3ResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listS3Resources(input, ...args);
};
export async function* paginateListS3Resources(
  config: MaciePaginationConfiguration,
  input: ListS3ResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListS3ResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListS3ResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MacieClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie | MacieClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
