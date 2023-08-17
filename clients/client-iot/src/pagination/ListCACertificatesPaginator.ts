// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCACertificatesCommand,
  ListCACertificatesCommandInput,
  ListCACertificatesCommandOutput,
} from "../commands/ListCACertificatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListCACertificatesCommandInput,
  ...args: any
): Promise<ListCACertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCACertificatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCACertificates(
  config: IoTPaginationConfiguration,
  input: ListCACertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCACertificatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCACertificatesCommandOutput;
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
