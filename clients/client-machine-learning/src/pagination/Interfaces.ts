import { MachineLearning } from "../MachineLearning";
import { MachineLearningClient } from "../MachineLearningClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface MachineLearningPaginationConfiguration extends PaginationConfiguration {
  client: MachineLearning | MachineLearningClient;
}
