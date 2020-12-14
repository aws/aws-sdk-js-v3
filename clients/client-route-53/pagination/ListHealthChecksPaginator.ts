import { Route53 } from "../Route53";
import { Route53Client } from "../Route53Client";
import {
  ListHealthChecksCommand,
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput,
} from "../commands/ListHealthChecksCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53Client,
  input: ListHealthChecksCommandInput,
  ...args: any
): Promise<ListHealthChecksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHealthChecksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53,
  input: ListHealthChecksCommandInput,
  ...args: any
): Promise<ListHealthChecksCommandOutput> => {
  // @ts-ignore
  return await client.listHealthChecks(input, ...args);
};
export async function* paginateListHealthChecks(
  config: Route53PaginationConfiguration,
  input: ListHealthChecksCommandInput,
  ...additionalArguments: any
): Paginator<ListHealthChecksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHealthChecksCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Route53) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Route53Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Route53 | Route53Client");
    }
    yield page;
    token = page.NextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
