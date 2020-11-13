import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import {
  DescribeTapesCommand,
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput,
} from "../commands/DescribeTapesCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: DescribeTapesCommandInput,
  ...args: any
): Promise<DescribeTapesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTapesCommand(input), ...args);
};
const makePagedRequest = async (
  client: StorageGateway,
  input: DescribeTapesCommandInput,
  ...args: any
): Promise<DescribeTapesCommandOutput> => {
  // @ts-ignore
  return await client.describeTapes(input, ...args);
};
export async function* describeTapesPaginate(
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTapesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTapesCommandOutput;
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
