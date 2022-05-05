// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { ServerlessApplicationRepository } from "../ServerlessApplicationRepository";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient";

export interface ServerlessApplicationRepositoryPaginationConfiguration extends PaginationConfiguration {
  client: ServerlessApplicationRepository | ServerlessApplicationRepositoryClient;
}
