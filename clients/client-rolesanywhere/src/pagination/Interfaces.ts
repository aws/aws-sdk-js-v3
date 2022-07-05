// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { RolesAnywhere } from "../RolesAnywhere";
import { RolesAnywhereClient } from "../RolesAnywhereClient";

export interface RolesAnywherePaginationConfiguration extends PaginationConfiguration {
  client: RolesAnywhere | RolesAnywhereClient;
}
