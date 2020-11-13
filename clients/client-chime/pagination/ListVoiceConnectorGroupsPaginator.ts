import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";
import {
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "../commands/ListVoiceConnectorGroupsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ChimeClient,
  input: ListVoiceConnectorGroupsCommandInput,
  ...args: any
): Promise<ListVoiceConnectorGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVoiceConnectorGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Chime,
  input: ListVoiceConnectorGroupsCommandInput,
  ...args: any
): Promise<ListVoiceConnectorGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listVoiceConnectorGroups(input, ...args);
};
export async function* listVoiceConnectorGroupsPaginate(
  config: ChimePaginationConfiguration,
  input: ListVoiceConnectorGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListVoiceConnectorGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVoiceConnectorGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Chime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Chime | ChimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
