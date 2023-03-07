// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeScheduledInstanceAvailabilityCommand,
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
} from "../commands/DescribeScheduledInstanceAvailabilityCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeScheduledInstanceAvailabilityCommandInput,
  ...args: any
): Promise<DescribeScheduledInstanceAvailabilityCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeScheduledInstanceAvailabilityCommand(input), ...args);
};
export async function* paginateDescribeScheduledInstanceAvailability(
  config: EC2PaginationConfiguration,
  input: DescribeScheduledInstanceAvailabilityCommandInput,
  ...additionalArguments: any
): Paginator<DescribeScheduledInstanceAvailabilityCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeScheduledInstanceAvailabilityCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
