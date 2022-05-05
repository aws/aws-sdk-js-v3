// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";

export interface RedshiftDataPaginationConfiguration extends PaginationConfiguration {
  client: RedshiftData | RedshiftDataClient;
}
