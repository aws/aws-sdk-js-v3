// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Omics } from "../Omics";
import { OmicsClient } from "../OmicsClient";

export interface OmicsPaginationConfiguration extends PaginationConfiguration {
  client: Omics | OmicsClient;
}
