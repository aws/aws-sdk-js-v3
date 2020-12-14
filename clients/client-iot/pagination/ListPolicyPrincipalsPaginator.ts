import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListPolicyPrincipalsCommand,
  ListPolicyPrincipalsCommandInput,
  ListPolicyPrincipalsCommandOutput,
} from "../commands/ListPolicyPrincipalsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTClient,
  input: ListPolicyPrincipalsCommandInput,
  ...args: any
): Promise<ListPolicyPrincipalsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPolicyPrincipalsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoT,
  input: ListPolicyPrincipalsCommandInput,
  ...args: any
): Promise<ListPolicyPrincipalsCommandOutput> => {
  // @ts-ignore
  return await client.listPolicyPrincipals(input, ...args);
};
export async function* paginateListPolicyPrincipals(
  config: IoTPaginationConfiguration,
  input: ListPolicyPrincipalsCommandInput,
  ...additionalArguments: any
): Paginator<ListPolicyPrincipalsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.marker
  let token: typeof input.marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPolicyPrincipalsCommandOutput;
  while (hasNext) {
    input.marker = token;
    input["pageSize"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextMarker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
