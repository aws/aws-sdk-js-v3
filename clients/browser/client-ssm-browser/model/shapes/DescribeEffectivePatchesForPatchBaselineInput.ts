import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEffectivePatchesForPatchBaselineInput: _Structure_ = {
  type: "structure",
  required: ["BaselineId"],
  members: {
    BaselineId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
