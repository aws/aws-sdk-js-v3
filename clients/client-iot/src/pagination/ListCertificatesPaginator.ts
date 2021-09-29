import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "../commands/ListCertificatesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListCertificatesCommandInput,
  ...args: any
): Promise<ListCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCertificatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListCertificatesCommandInput,
  ...args: any
): Promise<ListCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.listCertificates(input, ...args);
};
export async function* paginateListCertificates(
  config: IoTPaginationConfiguration,
  input: ListCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCertificatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCertificatesCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
