import { _Recommendation } from "./_Recommendation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Remediation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Recommendation: {
      shape: _Recommendation
    }
  }
};
