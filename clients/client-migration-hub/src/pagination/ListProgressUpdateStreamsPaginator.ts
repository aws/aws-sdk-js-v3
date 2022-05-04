// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListProgressUpdateStreamsCommand,
  ListProgressUpdateStreamsCommandInput,
  ListProgressUpdateStreamsCommandOutput,
} from "../commands/ListProgressUpdateStreamsCommand";
import { MigrationHub } from "../MigrationHub";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListProgressUpdateStreamsCommandInput,
  ...args: any
): Promise<ListProgressUpdateStreamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProgressUpdateStreamsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHub,
  input: ListProgressUpdateStreamsCommandInput,
  ...args: any
): Promise<ListProgressUpdateStreamsCommandOutput> => {
  // @ts-ignore
  return await client.listProgressUpdateStreams(input, ...args);
};
export async function* paginateListProgressUpdateStreams(
  config: MigrationHubPaginationConfiguration,
  input: ListProgressUpdateStreamsCommandInput,
  ...additionalArguments: any
): Paginator<ListProgressUpdateStreamsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProgressUpdateStreamsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MigrationHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MigrationHubClient) {
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
