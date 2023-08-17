// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRoleAliasesCommand,
  ListRoleAliasesCommandInput,
  ListRoleAliasesCommandOutput,
} from "../commands/ListRoleAliasesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListRoleAliasesCommandInput,
  ...args: any
): Promise<ListRoleAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoleAliasesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRoleAliases(
  config: IoTPaginationConfiguration,
  input: ListRoleAliasesCommandInput,
  ...additionalArguments: any
): Paginator<ListRoleAliasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRoleAliasesCommandOutput;
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
