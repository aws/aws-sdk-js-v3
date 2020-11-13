import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import {
  ListWorldTemplatesCommand,
  ListWorldTemplatesCommandInput,
  ListWorldTemplatesCommandOutput,
} from "../commands/ListWorldTemplatesCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListWorldTemplatesCommandInput,
  ...args: any
): Promise<ListWorldTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorldTemplatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListWorldTemplatesCommandInput,
  ...args: any
): Promise<ListWorldTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listWorldTemplates(input, ...args);
};
export async function* listWorldTemplatesPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListWorldTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListWorldTemplatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorldTemplatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
