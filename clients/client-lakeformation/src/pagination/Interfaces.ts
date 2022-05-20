// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { LakeFormation } from "../LakeFormation";
import { LakeFormationClient } from "../LakeFormationClient";

export interface LakeFormationPaginationConfiguration extends PaginationConfiguration {
  client: LakeFormation | LakeFormationClient;
}
