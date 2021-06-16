import { S3Control } from "../S3Control";
import { S3ControlClient } from "../S3ControlClient";
import {
  ListMultiRegionAccessPointsCommand,
  ListMultiRegionAccessPointsCommandInput,
  ListMultiRegionAccessPointsCommandOutput,
} from "../commands/ListMultiRegionAccessPointsCommand";
import { S3ControlPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListMultiRegionAccessPointsCommandInput,
  ...args: any
): Promise<ListMultiRegionAccessPointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMultiRegionAccessPointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: S3Control,
  input: ListMultiRegionAccessPointsCommandInput,
  ...args: any
): Promise<ListMultiRegionAccessPointsCommandOutput> => {
  // @ts-ignore
  return await client.listMultiRegionAccessPoints(input, ...args);
};
export async function* paginateListMultiRegionAccessPoints(
  config: S3ControlPaginationConfiguration,
  input: ListMultiRegionAccessPointsCommandInput,
  ...additionalArguments: any
): Paginator<ListMultiRegionAccessPointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMultiRegionAccessPointsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof S3Control) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof S3ControlClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3Control | S3ControlClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
