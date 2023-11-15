// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStorageLensGroupsCommand,
  ListStorageLensGroupsCommandInput,
  ListStorageLensGroupsCommandOutput,
} from "../commands/ListStorageLensGroupsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListStorageLensGroupsCommandInput,
  ...args: any
): Promise<ListStorageLensGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStorageLensGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStorageLensGroups(
  config: S3ControlPaginationConfiguration,
  input: ListStorageLensGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListStorageLensGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStorageLensGroupsCommandOutput;
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
