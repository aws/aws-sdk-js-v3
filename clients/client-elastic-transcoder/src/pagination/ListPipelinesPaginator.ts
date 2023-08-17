// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "../commands/ListPipelinesCommand";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticTranscoderClient,
  input: ListPipelinesCommandInput,
  ...args: any
): Promise<ListPipelinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPipelinesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPipelines(
  config: ElasticTranscoderPaginationConfiguration,
  input: ListPipelinesCommandInput,
  ...additionalArguments: any
): Paginator<ListPipelinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPipelinesCommandOutput;
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
