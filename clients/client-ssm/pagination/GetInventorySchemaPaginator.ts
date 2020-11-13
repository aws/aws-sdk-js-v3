import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  GetInventorySchemaCommand,
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
} from "../commands/GetInventorySchemaCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: GetInventorySchemaCommandInput,
  ...args: any
): Promise<GetInventorySchemaCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetInventorySchemaCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: GetInventorySchemaCommandInput,
  ...args: any
): Promise<GetInventorySchemaCommandOutput> => {
  // @ts-ignore
  return await client.getInventorySchema(input, ...args);
};
export async function* getInventorySchemaPaginate(
  config: SSMPaginationConfiguration,
  input: GetInventorySchemaCommandInput,
  ...additionalArguments: any
): Paginator<GetInventorySchemaCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetInventorySchemaCommandOutput;
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
