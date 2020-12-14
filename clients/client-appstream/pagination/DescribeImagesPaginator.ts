import { AppStream } from "../AppStream";
import { AppStreamClient } from "../AppStreamClient";
import {
  DescribeImagesCommand,
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
} from "../commands/DescribeImagesCommand";
import { AppStreamPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: AppStreamClient,
  input: DescribeImagesCommandInput,
  ...args: any
): Promise<DescribeImagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: AppStream,
  input: DescribeImagesCommandInput,
  ...args: any
): Promise<DescribeImagesCommandOutput> => {
  // @ts-ignore
  return await client.describeImages(input, ...args);
};
export async function* paginateDescribeImages(
  config: AppStreamPaginationConfiguration,
  input: DescribeImagesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeImagesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppStream) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppStreamClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppStream | AppStreamClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
