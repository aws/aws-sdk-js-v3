import { ConfigService } from "../ConfigService";
import { ConfigServiceClient } from "../ConfigServiceClient";
import {
  GetResourceConfigHistoryCommand,
  GetResourceConfigHistoryCommandInput,
  GetResourceConfigHistoryCommandOutput,
} from "../commands/GetResourceConfigHistoryCommand";
import { ConfigServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetResourceConfigHistoryCommandInput,
  ...args: any
): Promise<GetResourceConfigHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourceConfigHistoryCommand(input), ...args);
};
const makePagedRequest = async (
  client: ConfigService,
  input: GetResourceConfigHistoryCommandInput,
  ...args: any
): Promise<GetResourceConfigHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getResourceConfigHistory(input, ...args);
};
export async function* getResourceConfigHistoryPaginate(
  config: ConfigServicePaginationConfiguration,
  input: GetResourceConfigHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetResourceConfigHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetResourceConfigHistoryCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof ConfigService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
