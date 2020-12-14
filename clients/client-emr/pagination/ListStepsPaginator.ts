import { EMR } from "../EMR";
import { EMRClient } from "../EMRClient";
import { ListStepsCommand, ListStepsCommandInput, ListStepsCommandOutput } from "../commands/ListStepsCommand";
import { EMRPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListStepsCommandInput,
  ...args: any
): Promise<ListStepsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStepsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EMR,
  input: ListStepsCommandInput,
  ...args: any
): Promise<ListStepsCommandOutput> => {
  // @ts-ignore
  return await client.listSteps(input, ...args);
};
export async function* paginateListSteps(
  config: EMRPaginationConfiguration,
  input: ListStepsCommandInput,
  ...additionalArguments: any
): Paginator<ListStepsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStepsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMR) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
