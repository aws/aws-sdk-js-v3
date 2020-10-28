import { SageMakerA2IRuntime } from "../SageMakerA2IRuntime";
import { SageMakerA2IRuntimeClient } from "../SageMakerA2IRuntimeClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SageMakerA2IRuntimePaginationConfiguration extends PaginationConfiguration {
  client: SageMakerA2IRuntime | SageMakerA2IRuntimeClient;
}
