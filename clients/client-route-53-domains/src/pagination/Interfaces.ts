import { Route53Domains } from "../Route53Domains";
import { Route53DomainsClient } from "../Route53DomainsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface Route53DomainsPaginationConfiguration extends PaginationConfiguration {
  client: Route53Domains | Route53DomainsClient;
}
