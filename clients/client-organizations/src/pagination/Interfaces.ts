import { Organizations } from "../Organizations";
import { OrganizationsClient } from "../OrganizationsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface OrganizationsPaginationConfiguration extends PaginationConfiguration {
  client: Organizations | OrganizationsClient;
}
