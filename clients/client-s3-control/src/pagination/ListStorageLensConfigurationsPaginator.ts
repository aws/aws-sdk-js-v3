// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStorageLensConfigurationsCommand,
  ListStorageLensConfigurationsCommandInput,
  ListStorageLensConfigurationsCommandOutput,
} from "../commands/ListStorageLensConfigurationsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListStorageLensConfigurationsCommandInput,
  ...args: any
): Promise<ListStorageLensConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStorageLensConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStorageLensConfigurations(
  config: S3ControlPaginationConfiguration,
  input: ListStorageLensConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListStorageLensConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStorageLensConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof S3ControlClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3Control | S3ControlClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
