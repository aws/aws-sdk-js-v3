// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCredentialLockersCommand,
  ListCredentialLockersCommandInput,
  ListCredentialLockersCommandOutput,
} from "../commands/ListCredentialLockersCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCredentialLockers: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListCredentialLockersCommandInput,
  ...rest: any[]
) => Paginator<ListCredentialLockersCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListCredentialLockersCommandInput,
  ListCredentialLockersCommandOutput
>(IoTManagedIntegrationsClient, ListCredentialLockersCommand, "NextToken", "NextToken", "MaxResults");
