// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStreamConsumersCommand,
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
} from "../commands/ListStreamConsumersCommand";
import { KinesisClient } from "../KinesisClient";
import { KinesisPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KinesisClient,
  input: ListStreamConsumersCommandInput,
  ...args: any
): Promise<ListStreamConsumersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamConsumersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStreamConsumers(
  config: KinesisPaginationConfiguration,
  input: ListStreamConsumersCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamConsumersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamConsumersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KinesisClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kinesis | KinesisClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
