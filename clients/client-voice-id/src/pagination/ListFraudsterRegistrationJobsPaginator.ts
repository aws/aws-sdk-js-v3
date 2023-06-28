// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListFraudsterRegistrationJobsCommand,
  ListFraudsterRegistrationJobsCommandInput,
  ListFraudsterRegistrationJobsCommandOutput,
} from "../commands/ListFraudsterRegistrationJobsCommand";
import { VoiceIDClient } from "../VoiceIDClient";
import { VoiceIDPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: VoiceIDClient,
  input: ListFraudsterRegistrationJobsCommandInput,
  ...args: any
): Promise<ListFraudsterRegistrationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFraudsterRegistrationJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFraudsterRegistrationJobs(
  config: VoiceIDPaginationConfiguration,
  input: ListFraudsterRegistrationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListFraudsterRegistrationJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFraudsterRegistrationJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof VoiceIDClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected VoiceID | VoiceIDClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
