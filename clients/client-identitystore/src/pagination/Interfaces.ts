// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Identitystore } from "../Identitystore";
import { IdentitystoreClient } from "../IdentitystoreClient";

export interface IdentitystorePaginationConfiguration extends PaginationConfiguration {
  client: Identitystore | IdentitystoreClient;
}
