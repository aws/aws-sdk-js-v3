// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ECRPUBLIC } from "../ECRPUBLIC";
import { ECRPUBLICClient } from "../ECRPUBLICClient";

export interface ECRPUBLICPaginationConfiguration extends PaginationConfiguration {
  client: ECRPUBLIC | ECRPUBLICClient;
}
