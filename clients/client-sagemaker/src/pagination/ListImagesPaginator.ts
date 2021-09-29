import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
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
  client: SageMaker,
  input: ListImagesCommandInput,
  ...args: any
): Promise<ListImagesCommandOutput> => {
  // @ts-ignore
  return await client.listImages(input, ...args);
};
export async function* paginateListImages(
  config: SageMakerPaginationConfiguration,
  input: ListImagesCommandInput,
  ...additionalArguments: any
): Paginator<ListImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImagesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
