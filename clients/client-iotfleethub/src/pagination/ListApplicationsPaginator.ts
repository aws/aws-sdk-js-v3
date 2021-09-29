import { IoTFleetHub } from "../IoTFleetHub";
import { IoTFleetHubClient } from "../IoTFleetHubClient";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "../commands/ListApplicationsCommand";
import { IoTFleetHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTFleetHubClient,
  input: ListApplicationsCommandInput,
  ...args: any
): Promise<ListApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTFleetHub,
  input: ListApplicationsCommandInput,
  ...args: any
): Promise<ListApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listApplications(input, ...args);
};
export async function* paginateListApplications(
  config: IoTFleetHubPaginationConfiguration,
  input: ListApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof IoTFleetHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTFleetHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTFleetHub | IoTFleetHubClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
