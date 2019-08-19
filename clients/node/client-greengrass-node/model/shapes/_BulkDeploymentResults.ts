import { List as _List_ } from "@aws-sdk/types";
import { _BulkDeploymentResult } from "./_BulkDeploymentResult";

export const _BulkDeploymentResults: _List_ = {
  type: "list",
  member: {
    shape: _BulkDeploymentResult
  }
};
