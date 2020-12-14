import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListTargetsForSecurityProfileCommand,
  ListTargetsForSecurityProfileCommandInput,
  ListTargetsForSecurityProfileCommandOutput,
} from "../commands/ListTargetsForSecurityProfileCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListTargetsForSecurityProfileCommandInput,
  ...args: any
): Promise<ListTargetsForSecurityProfileCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTargetsForSecurityProfileCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListTargetsForSecurityProfileCommandInput,
  ...args: any
): Promise<ListTargetsForSecurityProfileCommandOutput> => {
  // @ts-ignore
  return await client.listTargetsForSecurityProfile(input, ...args);
};
export async function* paginateListTargetsForSecurityProfile(
  config: IoTPaginationConfiguration,
  input: ListTargetsForSecurityProfileCommandInput,
  ...additionalArguments: any
): Paginator<ListTargetsForSecurityProfileCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTargetsForSecurityProfileCommandOutput;
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
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
