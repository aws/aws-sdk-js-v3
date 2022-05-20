// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListImagePipelinesCommand,
  ListImagePipelinesCommandInput,
  ListImagePipelinesCommandOutput,
} from "../commands/ListImagePipelinesCommand";
import { Imagebuilder } from "../Imagebuilder";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListImagePipelinesCommandInput,
  ...args: any
): Promise<ListImagePipelinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImagePipelinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Imagebuilder,
  input: ListImagePipelinesCommandInput,
  ...args: any
): Promise<ListImagePipelinesCommandOutput> => {
  // @ts-ignore
  return await client.listImagePipelines(input, ...args);
};
export async function* paginateListImagePipelines(
  config: ImagebuilderPaginationConfiguration,
  input: ListImagePipelinesCommandInput,
  ...additionalArguments: any
): Paginator<ListImagePipelinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImagePipelinesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Imagebuilder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
