import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import {
  ListWorldExportJobsCommand,
  ListWorldExportJobsCommandInput,
  ListWorldExportJobsCommandOutput,
} from "../commands/ListWorldExportJobsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListWorldExportJobsCommandInput,
  ...args: any
): Promise<ListWorldExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorldExportJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListWorldExportJobsCommandInput,
  ...args: any
): Promise<ListWorldExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listWorldExportJobs(input, ...args);
};
export async function* listWorldExportJobsPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListWorldExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorldExportJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorldExportJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
