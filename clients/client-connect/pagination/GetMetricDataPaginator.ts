import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import {
  GetMetricDataCommand,
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
} from "../commands/GetMetricDataCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: GetMetricDataCommandInput,
  ...args: any
): Promise<GetMetricDataCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetMetricDataCommand(input, ...args));
};
const makePagedRequest = async (
  client: Connect,
  input: GetMetricDataCommandInput,
  ...args: any
): Promise<GetMetricDataCommandOutput> => {
  // @ts-ignore
  return await client.getMetricData(input, ...args);
};
export async function* getMetricDataPaginate(
  config: ConnectPaginationConfiguration,
  input: GetMetricDataCommandInput,
  ...additionalArguments: any
): Paginator<GetMetricDataCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetMetricDataCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
