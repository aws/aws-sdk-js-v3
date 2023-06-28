// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListModelPackageGroupsCommand,
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput,
} from "../commands/ListModelPackageGroupsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListModelPackageGroupsCommandInput,
  ...args: any
): Promise<ListModelPackageGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelPackageGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListModelPackageGroups(
  config: SageMakerPaginationConfiguration,
  input: ListModelPackageGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelPackageGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelPackageGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
