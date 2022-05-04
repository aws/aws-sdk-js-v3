// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SES } from "../SES";
import { SESClient } from "../SESClient";

export interface SESPaginationConfiguration extends PaginationConfiguration {
  client: SES | SESClient;
}
