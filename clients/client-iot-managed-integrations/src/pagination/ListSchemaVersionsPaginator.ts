// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListSchemaVersionsCommand,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput,
} from "../commands/ListSchemaVersionsCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSchemaVersions: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListSchemaVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListSchemaVersionsCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput
>(IoTManagedIntegrationsClient, ListSchemaVersionsCommand, "NextToken", "NextToken", "MaxResults");
