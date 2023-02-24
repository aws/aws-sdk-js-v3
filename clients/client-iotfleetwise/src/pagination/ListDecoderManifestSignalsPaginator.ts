// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDecoderManifestSignalsCommand,
  ListDecoderManifestSignalsCommandInput,
  ListDecoderManifestSignalsCommandOutput,
} from "../commands/ListDecoderManifestSignalsCommand";
import { IoTFleetWise } from "../IoTFleetWise";
import { IoTFleetWiseClient } from "../IoTFleetWiseClient";
import { IoTFleetWisePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTFleetWiseClient,
  input: ListDecoderManifestSignalsCommandInput,
  ...args: any
): Promise<ListDecoderManifestSignalsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDecoderManifestSignalsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTFleetWise,
  input: ListDecoderManifestSignalsCommandInput,
  ...args: any
): Promise<ListDecoderManifestSignalsCommandOutput> => {
  // @ts-ignore
  return await client.listDecoderManifestSignals(input, ...args);
};
export async function* paginateListDecoderManifestSignals(
  config: IoTFleetWisePaginationConfiguration,
  input: ListDecoderManifestSignalsCommandInput,
  ...additionalArguments: any
): Paginator<ListDecoderManifestSignalsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDecoderManifestSignalsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTFleetWise) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTFleetWiseClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTFleetWise | IoTFleetWiseClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
