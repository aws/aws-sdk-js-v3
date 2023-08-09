// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListSecretsCommand, ListSecretsCommandInput, ListSecretsCommandOutput } from "../commands/ListSecretsCommand";
import { SecretsManagerClient } from "../SecretsManagerClient";
import { SecretsManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecretsManagerClient,
  input: ListSecretsCommandInput,
  ...args: any
): Promise<ListSecretsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecretsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSecrets(
  config: SecretsManagerPaginationConfiguration,
  input: ListSecretsCommandInput,
  ...additionalArguments: any
): Paginator<ListSecretsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecretsCommandOutput;
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
