// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStreamProcessorsCommand,
  ListStreamProcessorsCommandInput,
  ListStreamProcessorsCommandOutput,
} from "../commands/ListStreamProcessorsCommand";
import { RekognitionClient } from "../RekognitionClient";
import { RekognitionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RekognitionClient,
  input: ListStreamProcessorsCommandInput,
  ...args: any
): Promise<ListStreamProcessorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamProcessorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStreamProcessors(
  config: RekognitionPaginationConfiguration,
  input: ListStreamProcessorsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamProcessorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamProcessorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RekognitionClient) {
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
