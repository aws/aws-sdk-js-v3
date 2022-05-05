// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeTapesCommand,
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput,
} from "../commands/DescribeTapesCommand";
import { StorageGateway } from "../StorageGateway";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: StorageGatewayClient,
  input: DescribeTapesCommandInput,
  ...args: any
): Promise<DescribeTapesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTapesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: StorageGateway,
  input: DescribeTapesCommandInput,
  ...args: any
): Promise<DescribeTapesCommandOutput> => {
  // @ts-ignore
  return await client.describeTapes(input, ...args);
};
export async function* paginateDescribeTapes(
  config: StorageGatewayPaginationConfiguration,
  input: DescribeTapesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTapesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
