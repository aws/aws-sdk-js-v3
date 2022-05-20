// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Evidently } from "../Evidently";
import { EvidentlyClient } from "../EvidentlyClient";

export interface EvidentlyPaginationConfiguration extends PaginationConfiguration {
  client: Evidently | EvidentlyClient;
}
