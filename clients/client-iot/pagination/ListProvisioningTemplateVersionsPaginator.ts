import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListProvisioningTemplateVersionsCommand,
  ListProvisioningTemplateVersionsCommandInput,
  ListProvisioningTemplateVersionsCommandOutput,
} from "../commands/ListProvisioningTemplateVersionsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListProvisioningTemplateVersionsCommandInput,
  ...args: any
): Promise<ListProvisioningTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProvisioningTemplateVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListProvisioningTemplateVersionsCommandInput,
  ...args: any
): Promise<ListProvisioningTemplateVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listProvisioningTemplateVersions(input, ...args);
};
export async function* paginateListProvisioningTemplateVersions(
  config: IoTPaginationConfiguration,
  input: ListProvisioningTemplateVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListProvisioningTemplateVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProvisioningTemplateVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoT) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoT | IoTClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
