import { ECR } from "../ECR";
import { ECRClient } from "../ECRClient";
import {
  GetLifecyclePolicyPreviewCommand,
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
} from "../commands/GetLifecyclePolicyPreviewCommand";
import { ECRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECRClient,
  input: GetLifecyclePolicyPreviewCommandInput,
  ...args: any
): Promise<GetLifecyclePolicyPreviewCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLifecyclePolicyPreviewCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECR,
  input: GetLifecyclePolicyPreviewCommandInput,
  ...args: any
): Promise<GetLifecyclePolicyPreviewCommandOutput> => {
  // @ts-ignore
  return await client.getLifecyclePolicyPreview(input, ...args);
};
export async function* paginateGetLifecyclePolicyPreview(
  config: ECRPaginationConfiguration,
  input: GetLifecyclePolicyPreviewCommandInput,
  ...additionalArguments: any
): Paginator<GetLifecyclePolicyPreviewCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetLifecyclePolicyPreviewCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
