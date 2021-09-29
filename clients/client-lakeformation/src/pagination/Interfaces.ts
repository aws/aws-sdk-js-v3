import { LakeFormation } from "../LakeFormation";
import { LakeFormationClient } from "../LakeFormationClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface LakeFormationPaginationConfiguration extends PaginationConfiguration {
  client: LakeFormation | LakeFormationClient;
}
