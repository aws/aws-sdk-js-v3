import { SecretsManager } from "../SecretsManager";
import { SecretsManagerClient } from "../SecretsManagerClient";
import {
  ListSecretVersionIdsCommand,
  ListSecretVersionIdsCommandInput,
  ListSecretVersionIdsCommandOutput,
} from "../commands/ListSecretVersionIdsCommand";
import { SecretsManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SecretsManagerClient,
  input: ListSecretVersionIdsCommandInput,
  ...args: any
): Promise<ListSecretVersionIdsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecretVersionIdsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SecretsManager,
  input: ListSecretVersionIdsCommandInput,
  ...args: any
): Promise<ListSecretVersionIdsCommandOutput> => {
  // @ts-ignore
  return await client.listSecretVersionIds(input, ...args);
};
export async function* listSecretVersionIdsPaginate(
  config: SecretsManagerPaginationConfiguration,
  input: ListSecretVersionIdsCommandInput,
  ...additionalArguments: any
): Paginator<ListSecretVersionIdsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListSecretVersionIdsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecretsManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecretsManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecretsManager | SecretsManagerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
