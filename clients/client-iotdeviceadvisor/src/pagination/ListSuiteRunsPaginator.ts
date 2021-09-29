import { IotDeviceAdvisor } from "../IotDeviceAdvisor";
import { IotDeviceAdvisorClient } from "../IotDeviceAdvisorClient";
import {
  ListSuiteRunsCommand,
  ListSuiteRunsCommandInput,
  ListSuiteRunsCommandOutput,
} from "../commands/ListSuiteRunsCommand";
import { IotDeviceAdvisorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IotDeviceAdvisorClient,
  input: ListSuiteRunsCommandInput,
  ...args: any
): Promise<ListSuiteRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSuiteRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IotDeviceAdvisor,
  input: ListSuiteRunsCommandInput,
  ...args: any
): Promise<ListSuiteRunsCommandOutput> => {
  // @ts-ignore
  return await client.listSuiteRuns(input, ...args);
};
export async function* paginateListSuiteRuns(
  config: IotDeviceAdvisorPaginationConfiguration,
  input: ListSuiteRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListSuiteRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSuiteRunsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IotDeviceAdvisor) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IotDeviceAdvisorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IotDeviceAdvisor | IotDeviceAdvisorClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
