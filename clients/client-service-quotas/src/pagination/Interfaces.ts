import { ServiceQuotas } from "../ServiceQuotas";
import { ServiceQuotasClient } from "../ServiceQuotasClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ServiceQuotasPaginationConfiguration extends PaginationConfiguration {
  client: ServiceQuotas | ServiceQuotasClient;
}
