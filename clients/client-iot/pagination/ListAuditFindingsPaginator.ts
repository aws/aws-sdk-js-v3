import { IoT } from "../IoT";
import { IoTClient } from "../IoTClient";
import {
  ListAuditFindingsCommand,
  ListAuditFindingsCommandInput,
  ListAuditFindingsCommandOutput,
} from "../commands/ListAuditFindingsCommand";
import { IoTPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: IoTClient,
  input: ListAuditFindingsCommandInput,
  ...args: any
): Promise<ListAuditFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAuditFindingsCommand(input), ...args);
};
const makePagedRequest = async (
  client: IoT,
  input: ListAuditFindingsCommandInput,
  ...args: any
): Promise<ListAuditFindingsCommandOutput> => {
  // @ts-ignore
  return await client.listAuditFindings(input, ...args);
};
export async function* paginateListAuditFindings(
  config: IoTPaginationConfiguration,
  input: ListAuditFindingsCommandInput,
  ...additionalArguments: any
): Paginator<ListAuditFindingsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAuditFindingsCommandOutput;
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
