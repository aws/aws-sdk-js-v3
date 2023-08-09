// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListOutgoingCertificatesCommand,
  ListOutgoingCertificatesCommandInput,
  ListOutgoingCertificatesCommandOutput,
} from "../commands/ListOutgoingCertificatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListOutgoingCertificatesCommandInput,
  ...args: any
): Promise<ListOutgoingCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOutgoingCertificatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListOutgoingCertificates(
  config: IoTPaginationConfiguration,
  input: ListOutgoingCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListOutgoingCertificatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOutgoingCertificatesCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
