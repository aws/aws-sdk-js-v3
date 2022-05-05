// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ConnectContactLens } from "../ConnectContactLens";
import { ConnectContactLensClient } from "../ConnectContactLensClient";

export interface ConnectContactLensPaginationConfiguration extends PaginationConfiguration {
  client: ConnectContactLens | ConnectContactLensClient;
}
