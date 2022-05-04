// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ServiceQuotas } from "../ServiceQuotas";
import { ServiceQuotasClient } from "../ServiceQuotasClient";

export interface ServiceQuotasPaginationConfiguration extends PaginationConfiguration {
  client: ServiceQuotas | ServiceQuotasClient;
}
