import { _Limits } from "./_Limits";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountLimitsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Limits: {
      shape: _Limits
    },
    NextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
