// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSecurityProfilesCommand,
  ListSecurityProfilesCommandInput,
  ListSecurityProfilesCommandOutput,
} from "../commands/ListSecurityProfilesCommand";
import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListSecurityProfilesCommandInput,
  ...args: any
): Promise<ListSecurityProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listSecurityProfiles(input, ...args);
};
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
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
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
