import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListThingPrincipalsCommand,
  ListThingPrincipalsCommandInput,
  ListThingPrincipalsCommandOutput,
} from "../commands/ListThingPrincipalsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListThingPrincipalsCommandInput,
  ...args: any
): Promise<ListThingPrincipalsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThingPrincipalsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListThingPrincipalsCommandInput,
  ...args: any
): Promise<ListThingPrincipalsCommandOutput> => {
  // @ts-ignore
  return await client.listThingPrincipals(input, ...args);
};
export async function* paginateListThingPrincipals(
  config: IoTPaginationConfiguration,
  input: ListThingPrincipalsCommandInput,
  ...additionalArguments: any
): Paginator<ListThingPrincipalsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThingPrincipalsCommandOutput;
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
