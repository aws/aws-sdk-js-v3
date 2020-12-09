import { EMRContainers } from "../EMRContainers";
import { EMRContainersClient } from "../EMRContainersClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface EMRContainersPaginationConfiguration extends PaginationConfiguration {
  client: EMRContainers | EMRContainersClient;
}
