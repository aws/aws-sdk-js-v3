// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListJobsByStatusCommand,
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput,
} from "../commands/ListJobsByStatusCommand";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticTranscoderClient,
  input: ListJobsByStatusCommandInput,
  ...args: any
): Promise<ListJobsByStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobsByStatusCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListJobsByStatus(
  config: ElasticTranscoderPaginationConfiguration,
  input: ListJobsByStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListJobsByStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobsByStatusCommandOutput;
  while (hasNext) {
    input.PageToken = token;
    if (config.client instanceof ElasticTranscoderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticTranscoder | ElasticTranscoderClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextPageToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
