import { IotDeviceAdvisor } from "../IotDeviceAdvisor";
import { IotDeviceAdvisorClient } from "../IotDeviceAdvisorClient";
import {
  ListTestCasesCommand,
  ListTestCasesCommandInput,
  ListTestCasesCommandOutput,
} from "../commands/ListTestCasesCommand";
import { IotDeviceAdvisorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IotDeviceAdvisorClient,
  input: ListTestCasesCommandInput,
  ...args: any
): Promise<ListTestCasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestCasesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IotDeviceAdvisor,
  input: ListTestCasesCommandInput,
  ...args: any
): Promise<ListTestCasesCommandOutput> => {
  // @ts-ignore
  return await client.listTestCases(input, ...args);
};
export async function* paginateListTestCases(
  config: IotDeviceAdvisorPaginationConfiguration,
  input: ListTestCasesCommandInput,
  ...additionalArguments: any
): Paginator<ListTestCasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTestCasesCommandOutput;
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
