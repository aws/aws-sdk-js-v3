// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeCustomDomainAssociationsCommand,
  DescribeCustomDomainAssociationsCommandInput,
  DescribeCustomDomainAssociationsCommandOutput,
} from "../commands/DescribeCustomDomainAssociationsCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeCustomDomainAssociationsCommandInput,
  ...args: any
): Promise<DescribeCustomDomainAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCustomDomainAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeCustomDomainAssociations(
  config: RedshiftPaginationConfiguration,
  input: DescribeCustomDomainAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCustomDomainAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCustomDomainAssociationsCommandOutput;
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
