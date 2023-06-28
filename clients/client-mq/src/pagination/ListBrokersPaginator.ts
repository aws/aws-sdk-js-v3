// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListBrokersCommand, ListBrokersCommandInput, ListBrokersCommandOutput } from "../commands/ListBrokersCommand";
import { MqClient } from "../MqClient";
import { MqPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MqClient,
  input: ListBrokersCommandInput,
  ...args: any
): Promise<ListBrokersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBrokersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBrokers(
  config: MqPaginationConfiguration,
  input: ListBrokersCommandInput,
  ...additionalArguments: any
): Paginator<ListBrokersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBrokersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MqClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mq | MqClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
