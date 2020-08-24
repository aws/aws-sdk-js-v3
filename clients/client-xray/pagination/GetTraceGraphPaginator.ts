import { XRay } from "../XRay";
import { XRayClient } from "../XRayClient";
import {
  GetTraceGraphCommand,
  GetTraceGraphCommandInput,
  GetTraceGraphCommandOutput,
} from "../commands/GetTraceGraphCommand";
import { XRayPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: XRayClient,
  input: GetTraceGraphCommandInput,
  ...args: any
): Promise<GetTraceGraphCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetTraceGraphCommand(input, ...args));
};
const makePagedRequest = async (
  client: XRay,
  input: GetTraceGraphCommandInput,
  ...args: any
): Promise<GetTraceGraphCommandOutput> => {
  // @ts-ignore
  return await client.getTraceGraph(input, ...args);
};
export async function* getTraceGraphPaginate(
  config: XRayPaginationConfiguration,
  input: GetTraceGraphCommandInput,
  ...additionalArguments: any
): Paginator<GetTraceGraphCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetTraceGraphCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
