import { WorkDocs } from "../WorkDocs";
import { WorkDocsClient } from "../WorkDocsClient";
import {
  DescribeUsersCommand,
  DescribeUsersCommandInput,
  DescribeUsersCommandOutput,
} from "../commands/DescribeUsersCommand";
import { WorkDocsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeUsersCommandInput,
  ...args: any
): Promise<DescribeUsersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUsersCommand(input, ...args));
};
const makePagedRequest = async (
  client: WorkDocs,
  input: DescribeUsersCommandInput,
  ...args: any
): Promise<DescribeUsersCommandOutput> => {
  // @ts-ignore
  return await client.describeUsers(input, ...args);
};
export async function* describeUsersPaginate(
  config: WorkDocsPaginationConfiguration,
  input: DescribeUsersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUsersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeUsersCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkDocs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkDocsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkDocs | WorkDocsClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
