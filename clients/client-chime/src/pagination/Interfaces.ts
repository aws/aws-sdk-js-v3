// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Chime } from "../Chime";
import { ChimeClient } from "../ChimeClient";

export interface ChimePaginationConfiguration extends PaginationConfiguration {
  client: Chime | ChimeClient;
}
