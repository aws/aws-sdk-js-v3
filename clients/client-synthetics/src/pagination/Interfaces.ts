// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Synthetics } from "../Synthetics";
import { SyntheticsClient } from "../SyntheticsClient";

export interface SyntheticsPaginationConfiguration extends PaginationConfiguration {
  client: Synthetics | SyntheticsClient;
}
