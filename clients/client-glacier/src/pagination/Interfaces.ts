// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Glacier } from "../Glacier";
import { GlacierClient } from "../GlacierClient";

export interface GlacierPaginationConfiguration extends PaginationConfiguration {
  client: Glacier | GlacierClient;
}
