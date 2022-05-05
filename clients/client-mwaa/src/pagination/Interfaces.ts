// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MWAA } from "../MWAA";
import { MWAAClient } from "../MWAAClient";

export interface MWAAPaginationConfiguration extends PaginationConfiguration {
  client: MWAA | MWAAClient;
}
