// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  QueryObjectsCommand,
  QueryObjectsCommandInput,
  QueryObjectsCommandOutput,
} from "../commands/QueryObjectsCommand";
import { DataPipelineClient } from "../DataPipelineClient";
import { DataPipelinePaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof DataPipelineClient) {
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
