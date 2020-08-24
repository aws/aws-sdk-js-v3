import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeReservedDBInstancesCommand,
  DescribeReservedDBInstancesCommandInput,
  DescribeReservedDBInstancesCommandOutput,
} from "../commands/DescribeReservedDBInstancesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeReservedDBInstancesCommandInput,
  ...args: any
): Promise<DescribeReservedDBInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedDBInstancesCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeReservedDBInstancesCommandInput,
  ...args: any
): Promise<DescribeReservedDBInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeReservedDBInstances(input, ...args);
};
export async function* describeReservedDBInstancesPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeReservedDBInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedDBInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeReservedDBInstancesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
