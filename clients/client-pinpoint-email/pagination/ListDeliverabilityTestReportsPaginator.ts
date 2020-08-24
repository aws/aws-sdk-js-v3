import { PinpointEmail } from "../PinpointEmail";
import { PinpointEmailClient } from "../PinpointEmailClient";
import {
  ListDeliverabilityTestReportsCommand,
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
} from "../commands/ListDeliverabilityTestReportsCommand";
import { PinpointEmailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: ListDeliverabilityTestReportsCommandInput,
  ...args: any
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDeliverabilityTestReportsCommand(input, ...args));
};
const makePagedRequest = async (
  client: PinpointEmail,
  input: ListDeliverabilityTestReportsCommandInput,
  ...args: any
): Promise<ListDeliverabilityTestReportsCommandOutput> => {
  // @ts-ignore
  return await client.listDeliverabilityTestReports(input, ...args);
};
export async function* listDeliverabilityTestReportsPaginate(
  config: PinpointEmailPaginationConfiguration,
  input: ListDeliverabilityTestReportsCommandInput,
  ...additionalArguments: any
): Paginator<ListDeliverabilityTestReportsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDeliverabilityTestReportsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
