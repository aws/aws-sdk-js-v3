// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { Athena } from "../Athena";
import { AthenaClient } from "../AthenaClient";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "../commands/ListSessionsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListSessionsCommandInput,
  ...args: any
): Promise<ListSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSessionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Athena,
  input: ListSessionsCommandInput,
  ...args: any
): Promise<ListSessionsCommandOutput> => {
  // @ts-ignore
  return await client.listSessions(input, ...args);
};
export async function* paginateListSessions(
  config: AthenaPaginationConfiguration,
  input: ListSessionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSessionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSessionsCommandOutput;
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
