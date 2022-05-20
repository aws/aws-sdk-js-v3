// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { WorkMail } from "../WorkMail";
import { WorkMailClient } from "../WorkMailClient";

export interface WorkMailPaginationConfiguration extends PaginationConfiguration {
  client: WorkMail | WorkMailClient;
}
