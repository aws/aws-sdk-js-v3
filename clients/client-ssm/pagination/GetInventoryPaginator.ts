import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  GetInventoryCommand,
  GetInventoryCommandInput,
  GetInventoryCommandOutput,
} from "../commands/GetInventoryCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: GetInventoryCommandInput,
  ...args: any
): Promise<GetInventoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInventoryCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: GetInventoryCommandInput,
  ...args: any
): Promise<GetInventoryCommandOutput> => {
  // @ts-ignore
  return await client.getInventory(input, ...args);
};
export async function* paginateGetInventory(
  config: SSMPaginationConfiguration,
  input: GetInventoryCommandInput,
  ...additionalArguments: any
): Paginator<GetInventoryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInventoryCommandOutput;
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
