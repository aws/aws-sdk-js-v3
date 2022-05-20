// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodeBuild } from "../CodeBuild";
import { CodeBuildClient } from "../CodeBuildClient";
import {
  ListBuildBatchesCommand,
  ListBuildBatchesCommandInput,
  ListBuildBatchesCommandOutput,
} from "../commands/ListBuildBatchesCommand";
import { CodeBuildPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodeBuildClient,
  input: ListBuildBatchesCommandInput,
  ...args: any
): Promise<ListBuildBatchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBuildBatchesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodeBuild,
  input: ListBuildBatchesCommandInput,
  ...args: any
): Promise<ListBuildBatchesCommandOutput> => {
  // @ts-ignore
  return await client.listBuildBatches(input, ...args);
};
export async function* paginateListBuildBatches(
  config: CodeBuildPaginationConfiguration,
  input: ListBuildBatchesCommandInput,
  ...additionalArguments: any
): Paginator<ListBuildBatchesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBuildBatchesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeBuild) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeBuildClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeBuild | CodeBuildClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
