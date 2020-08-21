import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListUserProfilesCommand,
  ListUserProfilesCommandInput,
  ListUserProfilesCommandOutput,
} from "../commands/ListUserProfilesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListUserProfilesCommandInput,
  ...args: any
): Promise<ListUserProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUserProfilesCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListUserProfilesCommandInput,
  ...args: any
): Promise<ListUserProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listUserProfiles(input, ...args);
};
export async function* listUserProfilesPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListUserProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListUserProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListUserProfilesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
