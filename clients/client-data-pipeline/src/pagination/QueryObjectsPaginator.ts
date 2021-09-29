import { DataPipeline } from "../DataPipeline";
import { DataPipelineClient } from "../DataPipelineClient";
import {
  QueryObjectsCommand,
  QueryObjectsCommandInput,
  QueryObjectsCommandOutput,
} from "../commands/QueryObjectsCommand";
import { DataPipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataPipelineClient,
  input: QueryObjectsCommandInput,
  ...args: any
): Promise<QueryObjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new QueryObjectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataPipeline,
  input: QueryObjectsCommandInput,
  ...args: any
): Promise<QueryObjectsCommandOutput> => {
  // @ts-ignore
  return await client.queryObjects(input, ...args);
};
export async function* paginateQueryObjects(
  config: DataPipelinePaginationConfiguration,
  input: QueryObjectsCommandInput,
  ...additionalArguments: any
): Paginator<QueryObjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: QueryObjectsCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof DataPipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataPipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataPipeline | DataPipelineClient");
    }
    yield page;
    token = page.marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
