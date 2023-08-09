// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDefaultClusterParametersCommand,
  DescribeDefaultClusterParametersCommandInput,
  DescribeDefaultClusterParametersCommandOutput,
} from "../commands/DescribeDefaultClusterParametersCommand";
import { RedshiftClient } from "../RedshiftClient";
import { RedshiftPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeDefaultClusterParametersCommandInput,
  ...args: any
): Promise<DescribeDefaultClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDefaultClusterParametersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDefaultClusterParameters(
  config: RedshiftPaginationConfiguration,
  input: DescribeDefaultClusterParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDefaultClusterParametersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDefaultClusterParametersCommandOutput;
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
    token = page.DefaultClusterParameters!.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
