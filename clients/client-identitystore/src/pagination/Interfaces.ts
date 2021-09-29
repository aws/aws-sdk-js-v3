import { Identitystore } from "../Identitystore";
import { IdentitystoreClient } from "../IdentitystoreClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IdentitystorePaginationConfiguration extends PaginationConfiguration {
  client: Identitystore | IdentitystoreClient;
}
