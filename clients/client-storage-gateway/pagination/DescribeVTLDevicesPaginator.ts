import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import {
  DescribeVTLDevicesCommand,
  DescribeVTLDevicesCommandInput,
  DescribeVTLDevicesCommandOutput,
} from "../commands/DescribeVTLDevicesCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: DescribeVTLDevicesCommandInput,
  ...args: any
): Promise<DescribeVTLDevicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeVTLDevicesCommand(input), ...args);
};
const makePagedRequest = async (
  client: StorageGateway,
  input: DescribeVTLDevicesCommandInput,
  ...args: any
): Promise<DescribeVTLDevicesCommandOutput> => {
  // @ts-ignore
  return await client.describeVTLDevices(input, ...args);
};
export async function* describeVTLDevicesPaginate(
  config: StorageGatewayPaginationConfiguration,
  input: DescribeVTLDevicesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeVTLDevicesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeVTLDevicesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGateway) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
