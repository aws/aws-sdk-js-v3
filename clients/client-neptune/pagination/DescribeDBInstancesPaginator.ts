import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";
import {
  DescribeDBInstancesCommand,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "../commands/DescribeDBInstancesCommand";
import { NeptunePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeDBInstancesCommandInput,
  ...args: any
): Promise<DescribeDBInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBInstancesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Neptune,
  input: DescribeDBInstancesCommandInput,
  ...args: any
): Promise<DescribeDBInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeDBInstances(input, ...args);
};
export async function* describeDBInstancesPaginate(
  config: NeptunePaginationConfiguration,
  input: DescribeDBInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBInstancesCommandOutput;
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
