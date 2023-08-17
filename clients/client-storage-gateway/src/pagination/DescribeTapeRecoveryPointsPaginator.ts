// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeTapeRecoveryPointsCommand,
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
} from "../commands/DescribeTapeRecoveryPointsCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: DescribeTapeRecoveryPointsCommandInput,
  ...args: any
): Promise<DescribeTapeRecoveryPointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTapeRecoveryPointsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeTapeRecoveryPoints(
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapeRecoveryPointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTapeRecoveryPointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTapeRecoveryPointsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof StorageGatewayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected StorageGateway | StorageGatewayClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
