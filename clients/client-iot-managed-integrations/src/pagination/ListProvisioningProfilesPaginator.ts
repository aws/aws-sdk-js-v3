// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListProvisioningProfilesCommand,
  ListProvisioningProfilesCommandInput,
  ListProvisioningProfilesCommandOutput,
} from "../commands/ListProvisioningProfilesCommand";
import { IoTManagedIntegrationsClient } from "../IoTManagedIntegrationsClient";
import { IoTManagedIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProvisioningProfiles: (
  config: IoTManagedIntegrationsPaginationConfiguration,
  input: ListProvisioningProfilesCommandInput,
  ...rest: any[]
) => Paginator<ListProvisioningProfilesCommandOutput> = createPaginator<
  IoTManagedIntegrationsPaginationConfiguration,
  ListProvisioningProfilesCommandInput,
  ListProvisioningProfilesCommandOutput
>(IoTManagedIntegrationsClient, ListProvisioningProfilesCommand, "NextToken", "NextToken", "MaxResults");
