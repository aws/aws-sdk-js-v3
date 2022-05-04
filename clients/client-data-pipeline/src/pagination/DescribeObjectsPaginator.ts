// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeObjectsCommand,
  DescribeObjectsCommandInput,
  DescribeObjectsCommandOutput,
} from "../commands/DescribeObjectsCommand";
import { DataPipeline } from "../DataPipeline";
import { DataPipelineClient } from "../DataPipelineClient";
import { DataPipelinePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataPipelineClient,
  input: DescribeObjectsCommandInput,
  ...args: any
): Promise<DescribeObjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeObjectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataPipeline,
  input: DescribeObjectsCommandInput,
  ...args: any
): Promise<DescribeObjectsCommandOutput> => {
  // @ts-ignore
  return await client.describeObjects(input, ...args);
};
export async function* paginateDescribeObjects(
  config: DataPipelinePaginationConfiguration,
  input: DescribeObjectsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeObjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeObjectsCommandOutput;
  while (hasNext) {
    input.marker = token;
    if (config.client instanceof DataPipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataPipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataPipeline | DataPipelineClient");
    }
    yield page;
    const prevToken = token;
    token = page.marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
