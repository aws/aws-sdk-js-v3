// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetReservedNodeExchangeConfigurationOptionsCommand,
  GetReservedNodeExchangeConfigurationOptionsCommandInput,
  GetReservedNodeExchangeConfigurationOptionsCommandOutput,
} from "../commands/GetReservedNodeExchangeConfigurationOptionsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: GetReservedNodeExchangeConfigurationOptionsCommandInput,
  ...args: any
): Promise<GetReservedNodeExchangeConfigurationOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetReservedNodeExchangeConfigurationOptionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetReservedNodeExchangeConfigurationOptions(
  config: RedshiftPaginationConfiguration,
  input: GetReservedNodeExchangeConfigurationOptionsCommandInput,
  ...additionalArguments: any
): Paginator<GetReservedNodeExchangeConfigurationOptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetReservedNodeExchangeConfigurationOptionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
