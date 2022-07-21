// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Athena } from "../Athena";
import { AthenaClient } from "../AthenaClient";
import {
  ListEngineVersionsCommand,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
} from "../commands/ListEngineVersionsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListEngineVersionsCommandInput,
  ...args: any
): Promise<ListEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEngineVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Athena,
  input: ListEngineVersionsCommandInput,
  ...args: any
): Promise<ListEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listEngineVersions(input, ...args);
};
export async function* paginateListEngineVersions(
  config: AthenaPaginationConfiguration,
  input: ListEngineVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListEngineVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEngineVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
