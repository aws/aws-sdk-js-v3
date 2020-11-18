import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import {
  ListAnalysesCommand,
  ListAnalysesCommandInput,
  ListAnalysesCommandOutput,
} from "../commands/ListAnalysesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListAnalysesCommandInput,
  ...args: any
): Promise<ListAnalysesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnalysesCommand(input), ...args);
};
const makePagedRequest = async (
  client: QuickSight,
  input: ListAnalysesCommandInput,
  ...args: any
): Promise<ListAnalysesCommandOutput> => {
  // @ts-ignore
  return await client.listAnalyses(input, ...args);
};
export async function* paginateListAnalyses(
  config: QuickSightPaginationConfiguration,
  input: ListAnalysesCommandInput,
  ...additionalArguments: any
): Paginator<ListAnalysesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnalysesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
