// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListResourceProfileDetectionsCommand,
  ListResourceProfileDetectionsCommandInput,
  ListResourceProfileDetectionsCommandOutput,
} from "../commands/ListResourceProfileDetectionsCommand";
import { Macie2Client } from "../Macie2Client";
import { Macie2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Macie2Client,
  input: ListResourceProfileDetectionsCommandInput,
  ...args: any
): Promise<ListResourceProfileDetectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResourceProfileDetectionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListResourceProfileDetections(
  config: Macie2PaginationConfiguration,
  input: ListResourceProfileDetectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListResourceProfileDetectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResourceProfileDetectionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Macie2Client) {
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
