// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAccessGrantsLocationsCommand,
  ListAccessGrantsLocationsCommandInput,
  ListAccessGrantsLocationsCommandOutput,
} from "../commands/ListAccessGrantsLocationsCommand";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListAccessGrantsLocationsCommandInput,
  ...args: any
): Promise<ListAccessGrantsLocationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessGrantsLocationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAccessGrantsLocations(
  config: S3ControlPaginationConfiguration,
  input: ListAccessGrantsLocationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessGrantsLocationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessGrantsLocationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
