import { Health } from "../Health";
import { HealthClient } from "../HealthClient";
import {
  DescribeAffectedEntitiesCommand,
  DescribeAffectedEntitiesCommandInput,
  DescribeAffectedEntitiesCommandOutput,
} from "../commands/DescribeAffectedEntitiesCommand";
import { HealthPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: HealthClient,
  input: DescribeAffectedEntitiesCommandInput,
  ...args: any
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAffectedEntitiesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Health,
  input: DescribeAffectedEntitiesCommandInput,
  ...args: any
): Promise<DescribeAffectedEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.describeAffectedEntities(input, ...args);
};
export async function* describeAffectedEntitiesPaginate(
  config: HealthPaginationConfiguration,
  input: DescribeAffectedEntitiesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAffectedEntitiesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAffectedEntitiesCommandOutput;
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
