// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { MachineLearning } from "../MachineLearning";
import { MachineLearningClient } from "../MachineLearningClient";

export interface MachineLearningPaginationConfiguration extends PaginationConfiguration {
  client: MachineLearning | MachineLearningClient;
}
