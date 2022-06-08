// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { RedshiftServerless } from "../RedshiftServerless";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";

export interface RedshiftServerlessPaginationConfiguration extends PaginationConfiguration {
  client: RedshiftServerless | RedshiftServerlessClient;
}
