// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFragmentsCommand,
  ListFragmentsCommandInput,
  ListFragmentsCommandOutput,
} from "../commands/ListFragmentsCommand";
import { KinesisVideoArchivedMediaClient } from "../KinesisVideoArchivedMediaClient";
import { KinesisVideoArchivedMediaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KinesisVideoArchivedMediaClient,
  input: ListFragmentsCommandInput,
  ...args: any
): Promise<ListFragmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFragmentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFragments(
  config: KinesisVideoArchivedMediaPaginationConfiguration,
  input: ListFragmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListFragmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFragmentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KinesisVideoArchivedMediaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KinesisVideoArchivedMedia | KinesisVideoArchivedMediaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
