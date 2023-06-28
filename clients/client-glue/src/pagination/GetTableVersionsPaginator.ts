// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetTableVersionsCommand,
  GetTableVersionsCommandInput,
  GetTableVersionsCommandOutput,
} from "../commands/GetTableVersionsCommand";
import { GlueClient } from "../GlueClient";
import { GluePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlueClient,
  input: GetTableVersionsCommandInput,
  ...args: any
): Promise<GetTableVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTableVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetTableVersions(
  config: GluePaginationConfiguration,
  input: GetTableVersionsCommandInput,
  ...additionalArguments: any
): Paginator<GetTableVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetTableVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
