// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSecretVersionIdsCommand,
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
} from "../commands/ListSecretVersionIdsCommand";
import { SecretsManagerClient } from "../SecretsManagerClient";
import { SecretsManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecretsManagerClient,
  input: ListSecretVersionIdsCommandInput,
  ...args: any
): Promise<ListSecretVersionIdsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecretVersionIdsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSecretVersionIds(
  config: SecretsManagerPaginationConfiguration,
  input: ListSecretVersionIdsCommandInput,
  ...additionalArguments: any
): Paginator<ListSecretVersionIdsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecretVersionIdsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecretsManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecretsManager | SecretsManagerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
