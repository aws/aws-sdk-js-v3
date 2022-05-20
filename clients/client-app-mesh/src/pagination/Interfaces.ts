// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";

export interface AppMeshPaginationConfiguration extends PaginationConfiguration {
  client: AppMesh | AppMeshClient;
}
