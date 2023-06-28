// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "../commands/ListSecurityProfilesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListSecurityProfilesCommandInput,
  ...args: any
): Promise<ListSecurityProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSecurityProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSecurityProfiles(
  config: IoTPaginationConfiguration,
  input: ListSecurityProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListSecurityProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSecurityProfilesCommandOutput;
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
