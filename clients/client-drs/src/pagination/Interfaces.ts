// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Drs } from "../Drs";
import { DrsClient } from "../DrsClient";

export interface DrsPaginationConfiguration extends PaginationConfiguration {
  client: Drs | DrsClient;
}
