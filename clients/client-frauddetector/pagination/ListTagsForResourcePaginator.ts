import { FraudDetector } from "../FraudDetector";
import { FraudDetectorClient } from "../FraudDetectorClient";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { FraudDetectorPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FraudDetectorClient,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagsForResourceCommand(input, ...args));
};
const makePagedRequest = async (
  client: FraudDetector,
  input: ListTagsForResourceCommandInput,
  ...args: any
): Promise<ListTagsForResourceCommandOutput> => {
  // @ts-ignore
  return await client.listTagsForResource(input, ...args);
};
export async function* listTagsForResourcePaginate(
  config: FraudDetectorPaginationConfiguration,
  input: ListTagsForResourceCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsForResourceCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTagsForResourceCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FraudDetector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FraudDetectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FraudDetector | FraudDetectorClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
