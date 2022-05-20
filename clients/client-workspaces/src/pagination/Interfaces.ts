// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { WorkSpaces } from "../WorkSpaces";
import { WorkSpacesClient } from "../WorkSpacesClient";

export interface WorkSpacesPaginationConfiguration extends PaginationConfiguration {
  client: WorkSpaces | WorkSpacesClient;
}
