// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";

export interface SageMakerPaginationConfiguration extends PaginationConfiguration {
  client: SageMaker | SageMakerClient;
}
