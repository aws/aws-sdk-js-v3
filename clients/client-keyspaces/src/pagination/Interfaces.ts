// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Keyspaces } from "../Keyspaces";
import { KeyspacesClient } from "../KeyspacesClient";

export interface KeyspacesPaginationConfiguration extends PaginationConfiguration {
  client: Keyspaces | KeyspacesClient;
}
