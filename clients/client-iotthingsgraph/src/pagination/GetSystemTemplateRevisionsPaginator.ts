// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetSystemTemplateRevisionsCommand,
  GetSystemTemplateRevisionsCommandInput,
  GetSystemTemplateRevisionsCommandOutput,
} from "../commands/GetSystemTemplateRevisionsCommand";
import { IoTThingsGraphClient } from "../IoTThingsGraphClient";
import { IoTThingsGraphPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTThingsGraphClient,
  input: GetSystemTemplateRevisionsCommandInput,
  ...args: any
): Promise<GetSystemTemplateRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSystemTemplateRevisionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetSystemTemplateRevisions(
  config: IoTThingsGraphPaginationConfiguration,
  input: GetSystemTemplateRevisionsCommandInput,
  ...additionalArguments: any
): Paginator<GetSystemTemplateRevisionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSystemTemplateRevisionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTThingsGraphClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTThingsGraph | IoTThingsGraphClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
