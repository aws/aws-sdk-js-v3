// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKMediaPipelines } from "../ChimeSDKMediaPipelines";
import { ChimeSDKMediaPipelinesClient } from "../ChimeSDKMediaPipelinesClient";
import {
  ListMediaPipelinesCommand,
  ListMediaPipelinesCommandInput,
  ListMediaPipelinesCommandOutput,
} from "../commands/ListMediaPipelinesCommand";
import { ChimeSDKMediaPipelinesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMediaPipelinesClient,
  input: ListMediaPipelinesCommandInput,
  ...args: any
): Promise<ListMediaPipelinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMediaPipelinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMediaPipelines,
  input: ListMediaPipelinesCommandInput,
  ...args: any
): Promise<ListMediaPipelinesCommandOutput> => {
  // @ts-ignore
  return await client.listMediaPipelines(input, ...args);
};
export async function* paginateListMediaPipelines(
  config: ChimeSDKMediaPipelinesPaginationConfiguration,
  input: ListMediaPipelinesCommandInput,
  ...additionalArguments: any
): Paginator<ListMediaPipelinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMediaPipelinesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKMediaPipelines) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeSDKMediaPipelinesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKMediaPipelines | ChimeSDKMediaPipelinesClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
