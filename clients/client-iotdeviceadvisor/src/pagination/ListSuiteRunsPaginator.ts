// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSuiteRunsCommand,
  ListSuiteRunsCommandInput,
  ListSuiteRunsCommandOutput,
} from "../commands/ListSuiteRunsCommand";
import { IotDeviceAdvisorClient } from "../IotDeviceAdvisorClient";
import { IotDeviceAdvisorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof IotDeviceAdvisorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IotDeviceAdvisor | IotDeviceAdvisorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
