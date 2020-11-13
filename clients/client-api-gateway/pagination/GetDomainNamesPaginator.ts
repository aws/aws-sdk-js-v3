import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetDomainNamesCommand,
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput,
} from "../commands/GetDomainNamesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetDomainNamesCommandInput,
  ...args: any
): Promise<GetDomainNamesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDomainNamesCommand(input), ...args);
};
const makePagedRequest = async (
  client: APIGateway,
  input: GetDomainNamesCommandInput,
  ...args: any
): Promise<GetDomainNamesCommandOutput> => {
  // @ts-ignore
  return await client.getDomainNames(input, ...args);
};
export async function* getDomainNamesPaginate(
  config: APIGatewayPaginationConfiguration,
  input: GetDomainNamesCommandInput,
  ...additionalArguments: any
): Paginator<GetDomainNamesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDomainNamesCommandOutput;
  while (hasNext) {
    input.position = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof APIGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof APIGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected APIGateway | APIGatewayClient");
    }
    yield page;
    token = page.position;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
