// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Fis } from "../Fis";
import { FisClient } from "../FisClient";

export interface FisPaginationConfiguration extends PaginationConfiguration {
  client: Fis | FisClient;
}
