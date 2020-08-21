import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
} from "../commands/ListChangeSetsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListChangeSetsCommandInput,
  ...args: any
): Promise<ListChangeSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChangeSetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListChangeSetsCommandInput,
  ...args: any
): Promise<ListChangeSetsCommandOutput> => {
  // @ts-ignore
  return await client.listChangeSets(input, ...args);
};
export async function* listChangeSetsPaginate(
  config: CloudFormationPaginationConfiguration,
  input: ListChangeSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListChangeSetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListChangeSetsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
