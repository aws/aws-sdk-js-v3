import { ECS } from "../ECS";
import { ECSClient } from "../ECSClient";
import {
  ListAccountSettingsCommand,
  ListAccountSettingsCommandInput,
  ListAccountSettingsCommandOutput,
} from "../commands/ListAccountSettingsCommand";
import { ECSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECSClient,
  input: ListAccountSettingsCommandInput,
  ...args: any
): Promise<ListAccountSettingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountSettingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECS,
  input: ListAccountSettingsCommandInput,
  ...args: any
): Promise<ListAccountSettingsCommandOutput> => {
  // @ts-ignore
  return await client.listAccountSettings(input, ...args);
};
export async function* paginateListAccountSettings(
  config: ECSPaginationConfiguration,
  input: ListAccountSettingsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountSettingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountSettingsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECS | ECSClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
