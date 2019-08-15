import { List as _List_ } from "@aws-sdk/types";
import { _BulkDeployment } from "./_BulkDeployment";

export const _BulkDeployments: _List_ = {
  type: "list",
  member: {
    shape: _BulkDeployment
  }
};
