import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";
import {
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsCommandInput,
  DescribeDBEngineVersionsCommandOutput,
} from "../commands/DescribeDBEngineVersionsCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeDBEngineVersionsCommandInput,
  ...args: any
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBEngineVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Neptune,
  input: DescribeDBEngineVersionsCommandInput,
  ...args: any
): Promise<DescribeDBEngineVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBEngineVersions(input, ...args);
};
export async function* describeDBEngineVersionsPaginate(
  config: NeptunePaginationConfiguration,
  input: DescribeDBEngineVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBEngineVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBEngineVersionsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Neptune) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NeptuneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Neptune | NeptuneClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
