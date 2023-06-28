// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPackageVersionsCommand,
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "../commands/ListPackageVersionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListPackageVersionsCommandInput,
  ...args: any
): Promise<ListPackageVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackageVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPackageVersions(
  config: IoTPaginationConfiguration,
  input: ListPackageVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPackageVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPackageVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
