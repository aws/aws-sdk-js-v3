// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOtaTasksCommand,
  ListOtaTasksCommandInput,
  ListOtaTasksCommandOutput,
} from "../commands/ListOtaTasksCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOtaTasks: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListOtaTasksCommandInput,
  ...rest: any[]
) => Paginator<ListOtaTasksCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListOtaTasksCommandInput,
  ListOtaTasksCommandOutput
>(IoTManagedIntegrationsClient, ListOtaTasksCommand, "NextToken", "NextToken", "MaxResults");
