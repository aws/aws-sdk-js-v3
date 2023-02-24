// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMetricAttributionsCommand,
  ListMetricAttributionsCommandInput,
  ListMetricAttributionsCommandOutput,
} from "../commands/ListMetricAttributionsCommand";
import { Personalize } from "../Personalize";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListMetricAttributionsCommandInput,
  ...args: any
): Promise<ListMetricAttributionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMetricAttributionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Personalize,
  input: ListMetricAttributionsCommandInput,
  ...args: any
): Promise<ListMetricAttributionsCommandOutput> => {
  // @ts-ignore
  return await client.listMetricAttributions(input, ...args);
};
export async function* paginateListMetricAttributions(
  config: PersonalizePaginationConfiguration,
  input: ListMetricAttributionsCommandInput,
  ...additionalArguments: any
): Paginator<ListMetricAttributionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMetricAttributionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Personalize) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
