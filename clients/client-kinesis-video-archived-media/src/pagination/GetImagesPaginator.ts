// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { GetImagesCommand, GetImagesCommandInput, GetImagesCommandOutput } from "../commands/GetImagesCommand";
import { KinesisVideoArchivedMediaClient } from "../KinesisVideoArchivedMediaClient";
import { KinesisVideoArchivedMediaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KinesisVideoArchivedMediaClient,
  input: GetImagesCommandInput,
  ...args: any
): Promise<GetImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetImagesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetImages(
  config: KinesisVideoArchivedMediaPaginationConfiguration,
  input: GetImagesCommandInput,
  ...additionalArguments: any
): Paginator<GetImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetImagesCommandOutput;
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
