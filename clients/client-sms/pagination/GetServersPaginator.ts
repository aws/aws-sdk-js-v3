import { SMS } from "../SMS";
import { SMSClient } from "../SMSClient";
import { GetServersCommand, GetServersCommandInput, GetServersCommandOutput } from "../commands/GetServersCommand";
import { SMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SMSClient,
  input: GetServersCommandInput,
  ...args: any
): Promise<GetServersCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetServersCommand(input), ...args);
};
const makePagedRequest = async (
  client: SMS,
  input: GetServersCommandInput,
  ...args: any
): Promise<GetServersCommandOutput> => {
  // @ts-ignore
  return await client.getServers(input, ...args);
};
export async function* getServersPaginate(
  config: SMSPaginationConfiguration,
  input: GetServersCommandInput,
  ...additionalArguments: any
): Paginator<GetServersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetServersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SMS | SMSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
