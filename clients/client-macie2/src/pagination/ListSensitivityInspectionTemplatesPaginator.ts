// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSensitivityInspectionTemplatesCommand,
  ListSensitivityInspectionTemplatesCommandInput,
  ListSensitivityInspectionTemplatesCommandOutput,
} from "../commands/ListSensitivityInspectionTemplatesCommand";
import { Macie2 } from "../Macie2";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListSensitivityInspectionTemplatesCommandInput,
  ...args: any
): Promise<ListSensitivityInspectionTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSensitivityInspectionTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Macie2,
  input: ListSensitivityInspectionTemplatesCommandInput,
  ...args: any
): Promise<ListSensitivityInspectionTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listSensitivityInspectionTemplates(input, ...args);
};
export async function* paginateListSensitivityInspectionTemplates(
  config: Macie2PaginationConfiguration,
  input: ListSensitivityInspectionTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListSensitivityInspectionTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSensitivityInspectionTemplatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Macie2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie2 | Macie2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
