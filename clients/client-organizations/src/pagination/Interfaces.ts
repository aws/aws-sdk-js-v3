// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";

export interface OrganizationsPaginationConfiguration extends PaginationConfiguration {
  client: Organizations | OrganizationsClient;
}
