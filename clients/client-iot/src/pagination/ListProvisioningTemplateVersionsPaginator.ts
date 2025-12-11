// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProvisioningTemplateVersionsCommand,
  ListProvisioningTemplateVersionsCommandInput,
  ListProvisioningTemplateVersionsCommandOutput,
} from "../commands/ListProvisioningTemplateVersionsCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProvisioningTemplateVersions: (
  config: IoTPaginationConfiguration,
  input: ListProvisioningTemplateVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListProvisioningTemplateVersionsCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListProvisioningTemplateVersionsCommandInput,
  ListProvisioningTemplateVersionsCommandOutput
>(IoTClient, ListProvisioningTemplateVersionsCommand, "nextToken", "nextToken", "maxResults");
