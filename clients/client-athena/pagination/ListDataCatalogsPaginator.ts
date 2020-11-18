import { Athena } from "../Athena";
import { AthenaClient } from "../AthenaClient";
import {
  ListDataCatalogsCommand,
  ListDataCatalogsCommandInput,
  ListDataCatalogsCommandOutput,
} from "../commands/ListDataCatalogsCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListDataCatalogsCommandInput,
  ...args: any
): Promise<ListDataCatalogsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataCatalogsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Athena,
  input: ListDataCatalogsCommandInput,
  ...args: any
): Promise<ListDataCatalogsCommandOutput> => {
  // @ts-ignore
  return await client.listDataCatalogs(input, ...args);
};
export async function* paginateListDataCatalogs(
  config: AthenaPaginationConfiguration,
  input: ListDataCatalogsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataCatalogsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataCatalogsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Athena) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
