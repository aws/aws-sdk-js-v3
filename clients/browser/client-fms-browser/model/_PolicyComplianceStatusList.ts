import { List as _List_ } from "@aws-sdk/types";
import { _PolicyComplianceStatus } from "./_PolicyComplianceStatus";

export const _PolicyComplianceStatusList: _List_ = {
  type: "list",
  member: {
    shape: _PolicyComplianceStatus
  }
};
