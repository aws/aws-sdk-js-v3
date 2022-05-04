// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { EMRContainers } from "../EMRContainers";
import { EMRContainersClient } from "../EMRContainersClient";

export interface EMRContainersPaginationConfiguration extends PaginationConfiguration {
  client: EMRContainers | EMRContainersClient;
}
