import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";
import {
  ListMailboxExportJobsCommand,
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
} from "../commands/ListMailboxExportJobsCommand";
import { WorkMailPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListMailboxExportJobsCommandInput,
  ...args: any
): Promise<ListMailboxExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMailboxExportJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: WorkMail,
  input: ListMailboxExportJobsCommandInput,
  ...args: any
): Promise<ListMailboxExportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listMailboxExportJobs(input, ...args);
};
export async function* listMailboxExportJobsPaginate(
  config: WorkMailPaginationConfiguration,
  input: ListMailboxExportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListMailboxExportJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMailboxExportJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
