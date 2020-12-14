import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "../commands/ListIndicesCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListIndicesCommandInput,
  ...args: any
): Promise<ListIndicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIndicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListIndicesCommandInput,
  ...args: any
): Promise<ListIndicesCommandOutput> => {
  // @ts-ignore
  return await client.listIndices(input, ...args);
};
export async function* paginateListIndices(
  config: IoTPaginationConfiguration,
  input: ListIndicesCommandInput,
  ...additionalArguments: any
): Paginator<ListIndicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIndicesCommandOutput;
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
