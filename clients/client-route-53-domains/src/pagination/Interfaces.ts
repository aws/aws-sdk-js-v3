// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Route53Domains } from "../Route53Domains";
import { Route53DomainsClient } from "../Route53DomainsClient";

export interface Route53DomainsPaginationConfiguration extends PaginationConfiguration {
  client: Route53Domains | Route53DomainsClient;
}
