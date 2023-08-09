// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ChimeSDKMediaPipelinesClient } from "../ChimeSDKMediaPipelinesClient";
import {
  ListMediaInsightsPipelineConfigurationsCommand,
  ListMediaInsightsPipelineConfigurationsCommandInput,
  ListMediaInsightsPipelineConfigurationsCommandOutput,
} from "../commands/ListMediaInsightsPipelineConfigurationsCommand";
import { ChimeSDKMediaPipelinesPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ChimeSDKMediaPipelinesClient,
  input: ListMediaInsightsPipelineConfigurationsCommandInput,
  ...args: any
): Promise<ListMediaInsightsPipelineConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMediaInsightsPipelineConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListMediaInsightsPipelineConfigurations(
  config: ChimeSDKMediaPipelinesPaginationConfiguration,
  input: ListMediaInsightsPipelineConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListMediaInsightsPipelineConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMediaInsightsPipelineConfigurationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKMediaPipelinesClient) {
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
