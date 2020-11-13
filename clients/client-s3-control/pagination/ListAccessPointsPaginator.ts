import { S3Control } from "../S3Control";
import { S3ControlClient } from "../S3ControlClient";
import {
  ListAccessPointsCommand,
  ListAccessPointsCommandInput,
  ListAccessPointsCommandOutput,
} from "../commands/ListAccessPointsCommand";
import { S3ControlPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: S3ControlClient,
  input: ListAccessPointsCommandInput,
  ...args: any
): Promise<ListAccessPointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessPointsCommand(input), ...args);
};
const makePagedRequest = async (
  client: S3Control,
  input: ListAccessPointsCommandInput,
  ...args: any
): Promise<ListAccessPointsCommandOutput> => {
  // @ts-ignore
  return await client.listAccessPoints(input, ...args);
};
export async function* listAccessPointsPaginate(
  config: S3ControlPaginationConfiguration,
  input: ListAccessPointsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessPointsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessPointsCommandOutput;
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
