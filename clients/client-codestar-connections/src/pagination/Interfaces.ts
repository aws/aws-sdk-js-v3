import { CodeStarConnections } from "../CodeStarConnections";
import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface CodeStarConnectionsPaginationConfiguration extends PaginationConfiguration {
  client: CodeStarConnections | CodeStarConnectionsClient;
}
