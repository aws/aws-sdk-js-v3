// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetDataLakeSourcesCommand,
  GetDataLakeSourcesCommandInput,
  GetDataLakeSourcesCommandOutput,
} from "../commands/GetDataLakeSourcesCommand";
import { SecurityLakeClient } from "../SecurityLakeClient";
import { SecurityLakePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityLakeClient,
  input: GetDataLakeSourcesCommandInput,
  ...args: any
): Promise<GetDataLakeSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDataLakeSourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetDataLakeSources(
  config: SecurityLakePaginationConfiguration,
  input: GetDataLakeSourcesCommandInput,
  ...additionalArguments: any
): Paginator<GetDataLakeSourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDataLakeSourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SecurityLakeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityLake | SecurityLakeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
