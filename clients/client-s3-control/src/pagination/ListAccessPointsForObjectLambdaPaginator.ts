// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAccessPointsForObjectLambdaCommand,
  ListAccessPointsForObjectLambdaCommandInput,
  ListAccessPointsForObjectLambdaCommandOutput,
} from "../commands/ListAccessPointsForObjectLambdaCommand";
import { S3Control } from "../S3Control";
import { S3ControlClient } from "../S3ControlClient";
import { S3ControlPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListAccessPointsForObjectLambdaCommandInput,
  ...args: any
): Promise<ListAccessPointsForObjectLambdaCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessPointsForObjectLambdaCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: S3Control,
  input: ListAccessPointsForObjectLambdaCommandInput,
  ...args: any
): Promise<ListAccessPointsForObjectLambdaCommandOutput> => {
  // @ts-ignore
  return await client.listAccessPointsForObjectLambda(input, ...args);
};
export async function* paginateListAccessPointsForObjectLambda(
  config: S3ControlPaginationConfiguration,
  input: ListAccessPointsForObjectLambdaCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessPointsForObjectLambdaCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessPointsForObjectLambdaCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
