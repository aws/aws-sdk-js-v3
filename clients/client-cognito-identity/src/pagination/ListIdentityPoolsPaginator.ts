// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CognitoIdentityClient } from "../CognitoIdentityClient";
import {
  ListIdentityPoolsCommand,
  ListIdentityPoolsCommandInput,
  ListIdentityPoolsCommandOutput,
} from "../commands/ListIdentityPoolsCommand";
import { CognitoIdentityPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CognitoIdentityClient,
  input: ListIdentityPoolsCommandInput,
  ...args: any
): Promise<ListIdentityPoolsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdentityPoolsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIdentityPools(
  config: CognitoIdentityPaginationConfiguration,
  input: ListIdentityPoolsCommandInput,
  ...additionalArguments: any
): Paginator<ListIdentityPoolsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIdentityPoolsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CognitoIdentityClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CognitoIdentity | CognitoIdentityClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
