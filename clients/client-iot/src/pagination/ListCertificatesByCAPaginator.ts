// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCertificatesByCACommand,
  ListCertificatesByCACommandInput,
  ListCertificatesByCACommandOutput,
} from "../commands/ListCertificatesByCACommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListCertificatesByCACommandInput,
  ...args: any
): Promise<ListCertificatesByCACommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCertificatesByCACommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCertificatesByCA(
  config: IoTPaginationConfiguration,
  input: ListCertificatesByCACommandInput,
  ...additionalArguments: any
): Paginator<ListCertificatesByCACommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCertificatesByCACommandOutput;
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
