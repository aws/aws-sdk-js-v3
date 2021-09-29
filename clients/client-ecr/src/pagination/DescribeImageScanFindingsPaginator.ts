import { ECR } from "../ECR";
import { ECRClient } from "../ECRClient";
import {
  DescribeImageScanFindingsCommand,
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
} from "../commands/DescribeImageScanFindingsCommand";
import { ECRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECRClient,
  input: DescribeImageScanFindingsCommandInput,
  ...args: any
): Promise<DescribeImageScanFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImageScanFindingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECR,
  input: DescribeImageScanFindingsCommandInput,
  ...args: any
): Promise<DescribeImageScanFindingsCommandOutput> => {
  // @ts-ignore
  return await client.describeImageScanFindings(input, ...args);
};
export async function* paginateDescribeImageScanFindings(
  config: ECRPaginationConfiguration,
  input: DescribeImageScanFindingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImageScanFindingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeImageScanFindingsCommandOutput;
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
