// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Proton } from "../Proton";
import { ProtonClient } from "../ProtonClient";

export interface ProtonPaginationConfiguration extends PaginationConfiguration {
  client: Proton | ProtonClient;
}
