// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListGroupResourcesCommand,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput,
} from "../commands/ListGroupResourcesCommand";
import { Synthetics } from "../Synthetics";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: ListGroupResourcesCommandInput,
  ...args: any
): Promise<ListGroupResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupResourcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Synthetics,
  input: ListGroupResourcesCommandInput,
  ...args: any
): Promise<ListGroupResourcesCommandOutput> => {
  // @ts-ignore
  return await client.listGroupResources(input, ...args);
};
export async function* paginateListGroupResources(
  config: SyntheticsPaginationConfiguration,
  input: ListGroupResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupResourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Synthetics) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SyntheticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Synthetics | SyntheticsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
