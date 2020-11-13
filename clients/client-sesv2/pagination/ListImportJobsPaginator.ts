import { SESv2 } from "../SESv2";
import { SESv2Client } from "../SESv2Client";
import {
  ListImportJobsCommand,
  ListImportJobsCommandInput,
  ListImportJobsCommandOutput,
} from "../commands/ListImportJobsCommand";
import { SESv2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SESv2Client,
  input: ListImportJobsCommandInput,
  ...args: any
): Promise<ListImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImportJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SESv2,
  input: ListImportJobsCommandInput,
  ...args: any
): Promise<ListImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listImportJobs(input, ...args);
};
export async function* listImportJobsPaginate(
  config: SESv2PaginationConfiguration,
  input: ListImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListImportJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImportJobsCommandOutput;
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
