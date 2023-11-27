// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  BatchGetSecretValueCommand,
  BatchGetSecretValueCommandInput,
  BatchGetSecretValueCommandOutput,
} from "../commands/BatchGetSecretValueCommand";
import { SecretsManagerClient } from "../SecretsManagerClient";
import { SecretsManagerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecretsManagerClient,
  input: BatchGetSecretValueCommandInput,
  ...args: any
): Promise<BatchGetSecretValueCommandOutput> => {
  // @ts-ignore
  return await client.send(new BatchGetSecretValueCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateBatchGetSecretValue(
  config: SecretsManagerPaginationConfiguration,
  input: BatchGetSecretValueCommandInput,
  ...additionalArguments: any
): Paginator<BatchGetSecretValueCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: BatchGetSecretValueCommandOutput;
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
