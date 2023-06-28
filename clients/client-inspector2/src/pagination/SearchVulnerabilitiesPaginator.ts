// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchVulnerabilitiesCommand,
  SearchVulnerabilitiesCommandInput,
  SearchVulnerabilitiesCommandOutput,
} from "../commands/SearchVulnerabilitiesCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Inspector2Client,
  input: SearchVulnerabilitiesCommandInput,
  ...args: any
): Promise<SearchVulnerabilitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchVulnerabilitiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchVulnerabilities(
  config: Inspector2PaginationConfiguration,
  input: SearchVulnerabilitiesCommandInput,
  ...additionalArguments: any
): Paginator<SearchVulnerabilitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchVulnerabilitiesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof Inspector2Client) {
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
