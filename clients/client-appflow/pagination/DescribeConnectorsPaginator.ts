import { Appflow } from "../Appflow";
import { AppflowClient } from "../AppflowClient";
import {
  DescribeConnectorsCommand,
  DescribeConnectorsCommandInput,
  DescribeConnectorsCommandOutput,
} from "../commands/DescribeConnectorsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AppflowClient,
  input: DescribeConnectorsCommandInput,
  ...args: any
): Promise<DescribeConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConnectorsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Appflow,
  input: DescribeConnectorsCommandInput,
  ...args: any
): Promise<DescribeConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.describeConnectors(input, ...args);
};
export async function* describeConnectorsPaginate(
  config: AppflowPaginationConfiguration,
  input: DescribeConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConnectorsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConnectorsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Appflow) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AppflowClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Appflow | AppflowClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
