import { SMS } from "../SMS";
import { SMSClient } from "../SMSClient";
import {
  GetConnectorsCommand,
  GetConnectorsCommandInput,
  GetConnectorsCommandOutput,
} from "../commands/GetConnectorsCommand";
import { SMSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SMSClient,
  input: GetConnectorsCommandInput,
  ...args: any
): Promise<GetConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetConnectorsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SMS,
  input: GetConnectorsCommandInput,
  ...args: any
): Promise<GetConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.getConnectors(input, ...args);
};
export async function* getConnectorsPaginate(
  config: SMSPaginationConfiguration,
  input: GetConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<GetConnectorsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetConnectorsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SMS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SMS | SMSClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
