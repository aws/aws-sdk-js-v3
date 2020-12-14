import { Route53 } from "../Route53";
import { Route53Client } from "../Route53Client";
import {
  ListHostedZonesCommand,
  ListHostedZonesCommandInput,
  ListHostedZonesCommandOutput,
} from "../commands/ListHostedZonesCommand";
import { Route53PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: Route53Client,
  input: ListHostedZonesCommandInput,
  ...args: any
): Promise<ListHostedZonesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHostedZonesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Route53,
  input: ListHostedZonesCommandInput,
  ...args: any
): Promise<ListHostedZonesCommandOutput> => {
  // @ts-ignore
  return await client.listHostedZones(input, ...args);
};
export async function* paginateListHostedZones(
  config: Route53PaginationConfiguration,
  input: ListHostedZonesCommandInput,
  ...additionalArguments: any
): Paginator<ListHostedZonesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHostedZonesCommandOutput;
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
