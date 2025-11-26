// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListProvisioningTemplatesCommand,
  ListProvisioningTemplatesCommandInput,
  ListProvisioningTemplatesCommandOutput,
} from "../commands/ListProvisioningTemplatesCommand";
import { IoTClient } from "../IoTClient";
import { IoTPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProvisioningTemplates: (
  config: IoTPaginationConfiguration,
  input: ListProvisioningTemplatesCommandInput,
  ...rest: any[]
) => Paginator<ListProvisioningTemplatesCommandOutput> = createPaginator<
  IoTPaginationConfiguration,
  ListProvisioningTemplatesCommandInput,
  ListProvisioningTemplatesCommandOutput
>(IoTClient, ListProvisioningTemplatesCommand, "nextToken", "nextToken", "maxResults");
