import { Health } from "../Health";
import { HealthClient } from "../HealthClient";
import {
  DescribeAffectedEntitiesForOrganizationCommand,
  DescribeAffectedEntitiesForOrganizationCommandInput,
  DescribeAffectedEntitiesForOrganizationCommandOutput,
} from "../commands/DescribeAffectedEntitiesForOrganizationCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  ...args: any
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAffectedEntitiesForOrganizationCommand(input), ...args);
};
const makePagedRequest = async (
  client: Health,
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  ...args: any
): Promise<DescribeAffectedEntitiesForOrganizationCommandOutput> => {
  // @ts-ignore
  return await client.describeAffectedEntitiesForOrganization(input, ...args);
};
export async function* describeAffectedEntitiesForOrganizationPaginate(
  config: HealthPaginationConfiguration,
  input: DescribeAffectedEntitiesForOrganizationCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAffectedEntitiesForOrganizationCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAffectedEntitiesForOrganizationCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Health) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HealthClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Health | HealthClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
