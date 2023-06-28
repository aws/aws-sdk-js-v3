// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListManagedJobTemplatesCommand,
  ListManagedJobTemplatesCommandInput,
  ListManagedJobTemplatesCommandOutput,
} from "../commands/ListManagedJobTemplatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListManagedJobTemplatesCommandInput,
  ...args: any
): Promise<ListManagedJobTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListManagedJobTemplatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListManagedJobTemplates(
  config: IoTPaginationConfiguration,
  input: ListManagedJobTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListManagedJobTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListManagedJobTemplatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
