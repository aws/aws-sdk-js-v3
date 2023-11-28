// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWebExperiencesCommand,
  ListWebExperiencesCommandInput,
  ListWebExperiencesCommandOutput,
} from "../commands/ListWebExperiencesCommand";
import { QBusinessClient } from "../QBusinessClient";
import { QBusinessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QBusinessClient,
  input: ListWebExperiencesCommandInput,
  ...args: any
): Promise<ListWebExperiencesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWebExperiencesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWebExperiences(
  config: QBusinessPaginationConfiguration,
  input: ListWebExperiencesCommandInput,
  ...additionalArguments: any
): Paginator<ListWebExperiencesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWebExperiencesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof QBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QBusiness | QBusinessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
