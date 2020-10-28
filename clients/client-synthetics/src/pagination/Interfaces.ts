import { Synthetics } from "../Synthetics";
import { SyntheticsClient } from "../SyntheticsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SyntheticsPaginationConfiguration extends PaginationConfiguration {
  client: Synthetics | SyntheticsClient;
}
