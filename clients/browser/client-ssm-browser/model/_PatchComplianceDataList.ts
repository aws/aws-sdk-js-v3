import { List as _List_ } from "@aws-sdk/types";
import { _PatchComplianceData } from "./_PatchComplianceData";

export const _PatchComplianceDataList: _List_ = {
  type: "list",
  member: {
    shape: _PatchComplianceData
  }
};
