// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListIdentitySourcesCommand,
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput,
} from "../commands/ListIdentitySourcesCommand";
import { VerifiedPermissionsClient } from "../VerifiedPermissionsClient";
import { VerifiedPermissionsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: VerifiedPermissionsClient,
  input: ListIdentitySourcesCommandInput,
  ...args: any
): Promise<ListIdentitySourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdentitySourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIdentitySources(
  config: VerifiedPermissionsPaginationConfiguration,
  input: ListIdentitySourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListIdentitySourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIdentitySourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof VerifiedPermissionsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected VerifiedPermissions | VerifiedPermissionsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
