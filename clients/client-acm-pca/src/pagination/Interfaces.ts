import { ACMPCA } from "../ACMPCA";
import { ACMPCAClient } from "../ACMPCAClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ACMPCAPaginationConfiguration extends PaginationConfiguration {
  client: ACMPCA | ACMPCAClient;
}
