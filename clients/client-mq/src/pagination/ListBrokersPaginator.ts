import { Mq } from "../Mq";
import { MqClient } from "../MqClient";
import { ListBrokersCommand, ListBrokersCommandInput, ListBrokersCommandOutput } from "../commands/ListBrokersCommand";
import { MqPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Mq,
  input: ListBrokersCommandInput,
  ...args: any
): Promise<ListBrokersCommandOutput> => {
  // @ts-ignore
  return await client.listBrokers(input, ...args);
};
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
    if (config.client instanceof Mq) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MqClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mq | MqClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
