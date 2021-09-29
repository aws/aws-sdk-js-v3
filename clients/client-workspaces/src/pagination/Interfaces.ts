import { WorkSpaces } from "../WorkSpaces";
import { WorkSpacesClient } from "../WorkSpacesClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface WorkSpacesPaginationConfiguration extends PaginationConfiguration {
  client: WorkSpaces | WorkSpacesClient;
}
