import { Glue } from "../Glue";
import { GlueClient } from "../GlueClient";
import {
  ListTriggersCommand,
  ListTriggersCommandInput,
  ListTriggersCommandOutput,
} from "../commands/ListTriggersCommand";
import { GluePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GlueClient,
  input: ListTriggersCommandInput,
  ...args: any
): Promise<ListTriggersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTriggersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Glue,
  input: ListTriggersCommandInput,
  ...args: any
): Promise<ListTriggersCommandOutput> => {
  // @ts-ignore
  return await client.listTriggers(input, ...args);
};
export async function* listTriggersPaginate(
  config: GluePaginationConfiguration,
  input: ListTriggersCommandInput,
  ...additionalArguments: any
): Paginator<ListTriggersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTriggersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
