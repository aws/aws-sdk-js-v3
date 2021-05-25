import { SSMIncidents } from "../SSMIncidents";
import { SSMIncidentsClient } from "../SSMIncidentsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SSMIncidentsPaginationConfiguration extends PaginationConfiguration {
  client: SSMIncidents | SSMIncidentsClient;
}
