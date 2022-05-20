// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CloudTrail } from "../CloudTrail";
import { CloudTrailClient } from "../CloudTrailClient";
import {
  LookupEventsCommand,
  LookupEventsCommandInput,
  LookupEventsCommandOutput,
} from "../commands/LookupEventsCommand";
import { CloudTrailPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CloudTrailClient,
  input: LookupEventsCommandInput,
  ...args: any
): Promise<LookupEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new LookupEventsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CloudTrail,
  input: LookupEventsCommandInput,
  ...args: any
): Promise<LookupEventsCommandOutput> => {
  // @ts-ignore
  return await client.lookupEvents(input, ...args);
};
export async function* paginateLookupEvents(
  config: CloudTrailPaginationConfiguration,
  input: LookupEventsCommandInput,
  ...additionalArguments: any
): Paginator<LookupEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: LookupEventsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudTrail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudTrailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudTrail | CloudTrailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
