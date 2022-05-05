// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { WorkSpacesWeb } from "../WorkSpacesWeb";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";

export interface WorkSpacesWebPaginationConfiguration extends PaginationConfiguration {
  client: WorkSpacesWeb | WorkSpacesWebClient;
}
