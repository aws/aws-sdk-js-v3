import { Route53Resolver } from "../Route53Resolver";
import { Route53ResolverClient } from "../Route53ResolverClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface Route53ResolverPaginationConfiguration extends PaginationConfiguration {
  client: Route53Resolver | Route53ResolverClient;
}
