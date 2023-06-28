// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDomainConfigurationsCommand,
  ListDomainConfigurationsCommandInput,
  ListDomainConfigurationsCommandOutput,
} from "../commands/ListDomainConfigurationsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListDomainConfigurationsCommandInput,
  ...args: any
): Promise<ListDomainConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDomainConfigurations(
  config: IoTPaginationConfiguration,
  input: ListDomainConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainConfigurationsCommandOutput;
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
