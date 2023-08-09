// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeTapesCommand,
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput,
} from "../commands/DescribeTapesCommand";
import { StorageGatewayClient } from "../StorageGatewayClient";
import { StorageGatewayPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
