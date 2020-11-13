import { RoboMaker } from "../RoboMaker";
import { RoboMakerClient } from "../RoboMakerClient";
import {
  ListWorldGenerationJobsCommand,
  ListWorldGenerationJobsCommandInput,
  ListWorldGenerationJobsCommandOutput,
} from "../commands/ListWorldGenerationJobsCommand";
import { RoboMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListWorldGenerationJobsCommandInput,
  ...args: any
): Promise<ListWorldGenerationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorldGenerationJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: RoboMaker,
  input: ListWorldGenerationJobsCommandInput,
  ...args: any
): Promise<ListWorldGenerationJobsCommandOutput> => {
  // @ts-ignore
  return await client.listWorldGenerationJobs(input, ...args);
};
export async function* listWorldGenerationJobsPaginate(
  config: RoboMakerPaginationConfiguration,
  input: ListWorldGenerationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorldGenerationJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorldGenerationJobsCommandOutput;
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
