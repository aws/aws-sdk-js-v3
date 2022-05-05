// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { ECR } from "../ECR";
import { ECRClient } from "../ECRClient";
import { ECRPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECRClient,
  input: ListImagesCommandInput,
  ...args: any
): Promise<ListImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECR,
  input: ListImagesCommandInput,
  ...args: any
): Promise<ListImagesCommandOutput> => {
  // @ts-ignore
  return await client.listImages(input, ...args);
};
export async function* paginateListImages(
  config: ECRPaginationConfiguration,
  input: ListImagesCommandInput,
  ...additionalArguments: any
): Paginator<ListImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImagesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECR | ECRClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
