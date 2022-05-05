// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { CodeStarConnections } from "../CodeStarConnections";
import { CodeStarConnectionsClient } from "../CodeStarConnectionsClient";

export interface CodeStarConnectionsPaginationConfiguration extends PaginationConfiguration {
  client: CodeStarConnections | CodeStarConnectionsClient;
}
