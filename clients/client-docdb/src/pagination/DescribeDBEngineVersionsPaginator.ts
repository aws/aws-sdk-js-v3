// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "../commands/DescribeDBEngineVersionsCommand";
import { DocDB } from "../DocDB";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribeDBEngineVersionsCommandInput,
  ...args: any
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBEngineVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DocDB,
  input: DescribeDBEngineVersionsCommandInput,
  ...args: any
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBEngineVersions(input, ...args);
};
export async function* paginateDescribeDBEngineVersions(
  config: DocDBPaginationConfiguration,
  input: DescribeDBEngineVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBEngineVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBEngineVersionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
