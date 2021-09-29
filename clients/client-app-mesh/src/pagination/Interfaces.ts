import { AppMesh } from "../AppMesh";
import { AppMeshClient } from "../AppMeshClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AppMeshPaginationConfiguration extends PaginationConfiguration {
  client: AppMesh | AppMeshClient;
}
