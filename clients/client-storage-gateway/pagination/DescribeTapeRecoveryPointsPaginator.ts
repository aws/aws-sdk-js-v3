import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import {
  DescribeTapeRecoveryPointsCommand,
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
} from "../commands/DescribeTapeRecoveryPointsCommand";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: DescribeTapeRecoveryPointsCommandInput,
  ...args: any
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTapeRecoveryPointsCommand(input), ...args);
};
const makePagedRequest = async (
  client: StorageGateway,
  input: DescribeTapeRecoveryPointsCommandInput,
  ...args: any
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  // @ts-ignore
  return await client.describeTapeRecoveryPoints(input, ...args);
};
export async function* describeTapeRecoveryPointsPaginate(
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapeRecoveryPointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTapeRecoveryPointsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTapeRecoveryPointsCommandOutput;
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
