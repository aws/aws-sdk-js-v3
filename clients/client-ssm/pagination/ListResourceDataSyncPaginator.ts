import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  ListResourceDataSyncCommand,
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
} from "../commands/ListResourceDataSyncCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: ListResourceDataSyncCommandInput,
  ...args: any
): Promise<ListResourceDataSyncCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceDataSyncCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: ListResourceDataSyncCommandInput,
  ...args: any
): Promise<ListResourceDataSyncCommandOutput> => {
  // @ts-ignore
  return await client.listResourceDataSync(input, ...args);
};
export async function* listResourceDataSyncPaginate(
  config: SSMPaginationConfiguration,
  input: ListResourceDataSyncCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceDataSyncCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceDataSyncCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
