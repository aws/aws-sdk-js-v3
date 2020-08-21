import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeEndpointTypesCommand,
  DescribeEndpointTypesCommandInput,
  DescribeEndpointTypesCommandOutput,
} from "../commands/DescribeEndpointTypesCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeEndpointTypesCommandInput,
  ...args: any
): Promise<DescribeEndpointTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEndpointTypesCommand(input, ...args));
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeEndpointTypesCommandInput,
  ...args: any
): Promise<DescribeEndpointTypesCommandOutput> => {
  // @ts-ignore
  return await client.describeEndpointTypes(input, ...args);
};
export async function* describeEndpointTypesPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEndpointTypesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEndpointTypesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeEndpointTypesCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
