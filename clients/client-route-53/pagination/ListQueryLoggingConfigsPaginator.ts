import { Route53 } from "../Route53";
import { Route53Client } from "../Route53Client";
import {
  ListQueryLoggingConfigsCommand,
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "../commands/ListQueryLoggingConfigsCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53Client,
  input: ListQueryLoggingConfigsCommandInput,
  ...args: any
): Promise<ListQueryLoggingConfigsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListQueryLoggingConfigsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53,
  input: ListQueryLoggingConfigsCommandInput,
  ...args: any
): Promise<ListQueryLoggingConfigsCommandOutput> => {
  // @ts-ignore
  return await client.listQueryLoggingConfigs(input, ...args);
};
export async function* paginateListQueryLoggingConfigs(
  config: Route53PaginationConfiguration,
  input: ListQueryLoggingConfigsCommandInput,
  ...additionalArguments: any
): Paginator<ListQueryLoggingConfigsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListQueryLoggingConfigsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Route53) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53 | Route53Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
