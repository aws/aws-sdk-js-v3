// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Redshift } from "../Redshift";
import { RedshiftClient } from "../RedshiftClient";

export interface RedshiftPaginationConfiguration extends PaginationConfiguration {
  client: Redshift | RedshiftClient;
}
