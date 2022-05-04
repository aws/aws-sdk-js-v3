// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCoverageCommand,
  ListCoverageCommandInput,
  ListCoverageCommandOutput,
} from "../commands/ListCoverageCommand";
import { Inspector2 } from "../Inspector2";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Inspector2Client,
  input: ListCoverageCommandInput,
  ...args: any
): Promise<ListCoverageCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCoverageCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Inspector2,
  input: ListCoverageCommandInput,
  ...args: any
): Promise<ListCoverageCommandOutput> => {
  // @ts-ignore
  return await client.listCoverage(input, ...args);
};
export async function* paginateListCoverage(
  config: Inspector2PaginationConfiguration,
  input: ListCoverageCommandInput,
  ...additionalArguments: any
): Paginator<ListCoverageCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCoverageCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Inspector2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector2 | Inspector2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
