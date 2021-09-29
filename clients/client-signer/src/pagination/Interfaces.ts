import { Signer } from "../Signer";
import { SignerClient } from "../SignerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SignerPaginationConfiguration extends PaginationConfiguration {
  client: Signer | SignerClient;
}
