import { IoT1ClickProjects } from "../IoT1ClickProjects";
import { IoT1ClickProjectsClient } from "../IoT1ClickProjectsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IoT1ClickProjectsPaginationConfiguration extends PaginationConfiguration {
  client: IoT1ClickProjects | IoT1ClickProjectsClient;
}
