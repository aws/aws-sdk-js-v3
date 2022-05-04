// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SSMIncidents } from "../SSMIncidents";
import { SSMIncidentsClient } from "../SSMIncidentsClient";

export interface SSMIncidentsPaginationConfiguration extends PaginationConfiguration {
  client: SSMIncidents | SSMIncidentsClient;
}
