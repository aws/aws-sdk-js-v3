import { SecretsManager } from "../SecretsManager";
import { SecretsManagerClient } from "../SecretsManagerClient";
import { ListSecretsCommand, ListSecretsCommandInput, ListSecretsCommandOutput } from "../commands/ListSecretsCommand";
import { SecretsManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SecretsManagerClient,
  input: ListSecretsCommandInput,
  ...args: any
): Promise<ListSecretsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecretsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SecretsManager,
  input: ListSecretsCommandInput,
  ...args: any
): Promise<ListSecretsCommandOutput> => {
  // @ts-ignore
  return await client.listSecrets(input, ...args);
};
export async function* listSecretsPaginate(
  config: SecretsManagerPaginationConfiguration,
  input: ListSecretsCommandInput,
  ...additionalArguments: any
): Paginator<ListSecretsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecretsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecretsManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecretsManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecretsManager | SecretsManagerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
