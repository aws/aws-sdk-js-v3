import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SageMakerPaginationConfiguration extends PaginationConfiguration {
  client: SageMaker | SageMakerClient;
}
