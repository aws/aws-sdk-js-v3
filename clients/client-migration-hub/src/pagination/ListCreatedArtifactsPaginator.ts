// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCreatedArtifactsCommand,
  ListCreatedArtifactsCommandInput,
  ListCreatedArtifactsCommandOutput,
} from "../commands/ListCreatedArtifactsCommand";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListCreatedArtifactsCommandInput,
  ...args: any
): Promise<ListCreatedArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCreatedArtifactsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCreatedArtifacts(
  config: MigrationHubPaginationConfiguration,
  input: ListCreatedArtifactsCommandInput,
  ...additionalArguments: any
): Paginator<ListCreatedArtifactsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCreatedArtifactsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MigrationHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHub | MigrationHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
