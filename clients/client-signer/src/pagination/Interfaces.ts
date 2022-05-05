// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Signer } from "../Signer";
import { SignerClient } from "../SignerClient";

export interface SignerPaginationConfiguration extends PaginationConfiguration {
  client: Signer | SignerClient;
}
