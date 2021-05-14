import { Commander } from "../Commander";
import { CommanderClient } from "../CommanderClient";
import {
  ListIncidentRecordsCommand,
  ListIncidentRecordsCommandInput,
  ListIncidentRecordsCommandOutput,
} from "../commands/ListIncidentRecordsCommand";
import { CommanderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CommanderClient,
  input: ListIncidentRecordsCommandInput,
  ...args: any
): Promise<ListIncidentRecordsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIncidentRecordsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Commander,
  input: ListIncidentRecordsCommandInput,
  ...args: any
): Promise<ListIncidentRecordsCommandOutput> => {
  // @ts-ignore
  return await client.listIncidentRecords(input, ...args);
};
export async function* paginateListIncidentRecords(
  config: CommanderPaginationConfiguration,
  input: ListIncidentRecordsCommandInput,
  ...additionalArguments: any
): Paginator<ListIncidentRecordsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIncidentRecordsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Commander) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CommanderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Commander | CommanderClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
