// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListOtaTaskExecutionsCommand,
  ListOtaTaskExecutionsCommandInput,
  ListOtaTaskExecutionsCommandOutput,
} from "../commands/ListOtaTaskExecutionsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOtaTaskExecutions: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListOtaTaskExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListOtaTaskExecutionsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListOtaTaskExecutionsCommandInput,
  ListOtaTaskExecutionsCommandOutput
>(IoTManagedIntegrationsClient, ListOtaTaskExecutionsCommand, "NextToken", "NextToken", "MaxResults");
