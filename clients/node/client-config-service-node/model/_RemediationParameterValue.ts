import { _ResourceValue } from "./_ResourceValue";
import { _StaticValue } from "./_StaticValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemediationParameterValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceValue: {
      shape: _ResourceValue
    },
    StaticValue: {
      shape: _StaticValue
    }
  }
};
