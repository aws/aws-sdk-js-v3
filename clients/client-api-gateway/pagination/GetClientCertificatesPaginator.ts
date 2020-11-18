import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetClientCertificatesCommand,
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "../commands/GetClientCertificatesCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetClientCertificatesCommandInput,
  ...args: any
): Promise<GetClientCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetClientCertificatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: APIGateway,
  input: GetClientCertificatesCommandInput,
  ...args: any
): Promise<GetClientCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.getClientCertificates(input, ...args);
};
export async function* paginateGetClientCertificates(
  config: APIGatewayPaginationConfiguration,
  input: GetClientCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<GetClientCertificatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetClientCertificatesCommandOutput;
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
