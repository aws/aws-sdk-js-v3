import { Support } from "../Support";
import { SupportClient } from "../SupportClient";
import {
  DescribeCommunicationsCommand,
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput,
} from "../commands/DescribeCommunicationsCommand";
import { SupportPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SupportClient,
  input: DescribeCommunicationsCommandInput,
  ...args: any
): Promise<DescribeCommunicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCommunicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Support,
  input: DescribeCommunicationsCommandInput,
  ...args: any
): Promise<DescribeCommunicationsCommandOutput> => {
  // @ts-ignore
  return await client.describeCommunications(input, ...args);
};
export async function* paginateDescribeCommunications(
  config: SupportPaginationConfiguration,
  input: DescribeCommunicationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCommunicationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCommunicationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Support) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SupportClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Support | SupportClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
