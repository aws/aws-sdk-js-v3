// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ACMPCA } from "../ACMPCA";
import { ACMPCAClient } from "../ACMPCAClient";

export interface ACMPCAPaginationConfiguration extends PaginationConfiguration {
  client: ACMPCA | ACMPCAClient;
}
