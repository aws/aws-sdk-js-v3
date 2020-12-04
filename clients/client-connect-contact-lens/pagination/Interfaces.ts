import { ConnectContactLens } from "../ConnectContactLens";
import { ConnectContactLensClient } from "../ConnectContactLensClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ConnectContactLensPaginationConfiguration extends PaginationConfiguration {
  client: ConnectContactLens | ConnectContactLensClient;
}
