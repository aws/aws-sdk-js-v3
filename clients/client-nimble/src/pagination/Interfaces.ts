// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Nimble } from "../Nimble";
import { NimbleClient } from "../NimbleClient";

export interface NimblePaginationConfiguration extends PaginationConfiguration {
  client: Nimble | NimbleClient;
}
