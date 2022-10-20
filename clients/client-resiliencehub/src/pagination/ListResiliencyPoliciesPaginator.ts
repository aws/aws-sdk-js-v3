// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListResiliencyPoliciesCommand,
  ListResiliencyPoliciesCommandInput,
  ListResiliencyPoliciesCommandOutput,
} from "../commands/ListResiliencyPoliciesCommand";
import { Resiliencehub } from "../Resiliencehub";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListResiliencyPoliciesCommandInput,
  ...args: any
): Promise<ListResiliencyPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListResiliencyPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Resiliencehub,
  input: ListResiliencyPoliciesCommandInput,
  ...args: any
): Promise<ListResiliencyPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listResiliencyPolicies(input, ...args);
};
export async function* paginateListResiliencyPolicies(
  config: ResiliencehubPaginationConfiguration,
  input: ListResiliencyPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListResiliencyPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListResiliencyPoliciesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Resiliencehub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResiliencehubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Resiliencehub | ResiliencehubClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
