import { _PolicyComplianceDetail } from "./_PolicyComplianceDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetComplianceDetailOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyComplianceDetail: {
      shape: _PolicyComplianceDetail
    }
  }
};
