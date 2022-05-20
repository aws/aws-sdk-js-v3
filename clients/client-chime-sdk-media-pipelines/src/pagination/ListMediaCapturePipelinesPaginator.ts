// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKMediaPipelines } from "../ChimeSDKMediaPipelines";
import { ChimeSDKMediaPipelinesClient } from "../ChimeSDKMediaPipelinesClient";
import {
  ListMediaCapturePipelinesCommand,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "../commands/ListMediaCapturePipelinesCommand";
import { ChimeSDKMediaPipelinesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMediaPipelinesClient,
  input: ListMediaCapturePipelinesCommandInput,
  ...args: any
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMediaCapturePipelinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMediaPipelines,
  input: ListMediaCapturePipelinesCommandInput,
  ...args: any
): Promise<ListMediaCapturePipelinesCommandOutput> => {
  // @ts-ignore
  return await client.listMediaCapturePipelines(input, ...args);
};
export async function* paginateListMediaCapturePipelines(
  config: ChimeSDKMediaPipelinesPaginationConfiguration,
  input: ListMediaCapturePipelinesCommandInput,
  ...additionalArguments: any
): Paginator<ListMediaCapturePipelinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMediaCapturePipelinesCommandOutput;
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
