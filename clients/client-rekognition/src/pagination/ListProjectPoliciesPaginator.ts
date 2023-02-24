// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListProjectPoliciesCommand,
  ListProjectPoliciesCommandInput,
  ListProjectPoliciesCommandOutput,
} from "../commands/ListProjectPoliciesCommand";
import { Rekognition } from "../Rekognition";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: ListProjectPoliciesCommandInput,
  ...args: any
): Promise<ListProjectPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProjectPoliciesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Rekognition,
  input: ListProjectPoliciesCommandInput,
  ...args: any
): Promise<ListProjectPoliciesCommandOutput> => {
  // @ts-ignore
  return await client.listProjectPolicies(input, ...args);
};
export async function* paginateListProjectPolicies(
  config: RekognitionPaginationConfiguration,
  input: ListProjectPoliciesCommandInput,
  ...additionalArguments: any
): Paginator<ListProjectPoliciesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProjectPoliciesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Rekognition) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RekognitionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Rekognition | RekognitionClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
