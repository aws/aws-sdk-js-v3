import { KinesisVideoArchivedMedia } from "../KinesisVideoArchivedMedia";
import { KinesisVideoArchivedMediaClient } from "../KinesisVideoArchivedMediaClient";
import {
  ListFragmentsCommand,
  ListFragmentsCommandInput,
  ListFragmentsCommandOutput,
} from "../commands/ListFragmentsCommand";
import { KinesisVideoArchivedMediaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: KinesisVideoArchivedMedia,
  input: ListFragmentsCommandInput,
  ...args: any
): Promise<ListFragmentsCommandOutput> => {
  // @ts-ignore
  return await client.listFragments(input, ...args);
};
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
    if (config.client instanceof KinesisVideoArchivedMedia) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KinesisVideoArchivedMediaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KinesisVideoArchivedMedia | KinesisVideoArchivedMediaClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
