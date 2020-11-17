import { APIGateway } from "../APIGateway";
import { APIGatewayClient } from "../APIGatewayClient";
import {
  GetDeploymentsCommand,
  GetDeploymentsCommandInput,
  GetDeploymentsCommandOutput,
} from "../commands/GetDeploymentsCommand";
import { APIGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: APIGatewayClient,
  input: GetDeploymentsCommandInput,
  ...args: any
): Promise<GetDeploymentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDeploymentsCommand(input), ...args);
};
const makePagedRequest = async (
  client: APIGateway,
  input: GetDeploymentsCommandInput,
  ...args: any
): Promise<GetDeploymentsCommandOutput> => {
  // @ts-ignore
  return await client.getDeployments(input, ...args);
};
export async function* paginateGetDeployments(
  config: APIGatewayPaginationConfiguration,
  input: GetDeploymentsCommandInput,
  ...additionalArguments: any
): Paginator<GetDeploymentsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDeploymentsCommandOutput;
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
