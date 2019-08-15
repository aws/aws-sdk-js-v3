import { _Compliance } from "./_Compliance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceByConfigRule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Compliance: {
      shape: _Compliance
    }
  }
};
