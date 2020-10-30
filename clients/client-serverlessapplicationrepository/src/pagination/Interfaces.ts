import { ServerlessApplicationRepository } from "../ServerlessApplicationRepository";
import { ServerlessApplicationRepositoryClient } from "../ServerlessApplicationRepositoryClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ServerlessApplicationRepositoryPaginationConfiguration extends PaginationConfiguration {
  client: ServerlessApplicationRepository | ServerlessApplicationRepositoryClient;
}
