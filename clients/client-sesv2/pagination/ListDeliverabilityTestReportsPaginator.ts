import { SESv2 } from "../SESv2";
import { SESv2Client } from "../SESv2Client";
import {
  ListDeliverabilityTestReportsCommand,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "../commands/ListDeliverabilityTestReportsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListDeliverabilityTestReportsCommandInput,
  ...args: any
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeliverabilityTestReportsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SESv2,
  input: ListDeliverabilityTestReportsCommandInput,
  ...args: any
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  // @ts-ignore
  return await client.listDeliverabilityTestReports(input, ...args);
};
export async function* listDeliverabilityTestReportsPaginate(
  config: SESv2PaginationConfiguration,
  input: ListDeliverabilityTestReportsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeliverabilityTestReportsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDeliverabilityTestReportsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof SESv2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SESv2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SESv2 | SESv2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
