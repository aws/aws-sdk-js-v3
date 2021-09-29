import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListRoleAliasesCommand,
  ListRoleAliasesCommandInput,
  ListRoleAliasesCommandOutput,
} from "../commands/ListRoleAliasesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListRoleAliasesCommandInput,
  ...args: any
): Promise<ListRoleAliasesCommandOutput> => {
  // @ts-ignore
  return await client.listRoleAliases(input, ...args);
};
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
