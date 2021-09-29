import { GroundStation } from "../GroundStation";
import { GroundStationClient } from "../GroundStationClient";
import { ListConfigsCommand, ListConfigsCommandInput, ListConfigsCommandOutput } from "../commands/ListConfigsCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListConfigsCommandInput,
  ...args: any
): Promise<ListConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GroundStation,
  input: ListConfigsCommandInput,
  ...args: any
): Promise<ListConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listConfigs(input, ...args);
};
export async function* paginateListConfigs(
  config: GroundStationPaginationConfiguration,
  input: ListConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GroundStation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GroundStationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GroundStation | GroundStationClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
