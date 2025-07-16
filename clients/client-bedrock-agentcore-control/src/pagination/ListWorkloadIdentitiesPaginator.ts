// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListWorkloadIdentitiesCommand,
  ListWorkloadIdentitiesCommandInput,
  ListWorkloadIdentitiesCommandOutput,
} from "../commands/ListWorkloadIdentitiesCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkloadIdentities: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListWorkloadIdentitiesCommandInput,
  ...rest: any[]
) => Paginator<ListWorkloadIdentitiesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListWorkloadIdentitiesCommandInput,
  ListWorkloadIdentitiesCommandOutput
>(BedrockAgentCoreControlClient, ListWorkloadIdentitiesCommand, "nextToken", "nextToken", "maxResults");
