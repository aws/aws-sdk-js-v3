// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { OpsWorks } from "../OpsWorks";
import { OpsWorksClient } from "../OpsWorksClient";

export interface OpsWorksPaginationConfiguration extends PaginationConfiguration {
  client: OpsWorks | OpsWorksClient;
}
