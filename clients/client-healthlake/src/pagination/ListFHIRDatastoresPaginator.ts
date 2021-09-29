import { HealthLake } from "../HealthLake";
import { HealthLakeClient } from "../HealthLakeClient";
import {
  ListFHIRDatastoresCommand,
  ListFHIRDatastoresCommandInput,
  ListFHIRDatastoresCommandOutput,
} from "../commands/ListFHIRDatastoresCommand";
import { HealthLakePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HealthLakeClient,
  input: ListFHIRDatastoresCommandInput,
  ...args: any
): Promise<ListFHIRDatastoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFHIRDatastoresCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: HealthLake,
  input: ListFHIRDatastoresCommandInput,
  ...args: any
): Promise<ListFHIRDatastoresCommandOutput> => {
  // @ts-ignore
  return await client.listFHIRDatastores(input, ...args);
};
export async function* paginateListFHIRDatastores(
  config: HealthLakePaginationConfiguration,
  input: ListFHIRDatastoresCommandInput,
  ...additionalArguments: any
): Paginator<ListFHIRDatastoresCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFHIRDatastoresCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof HealthLake) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HealthLakeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected HealthLake | HealthLakeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
