import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCopyProductStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CopyProductStatus: {
      shape: {
        type: "string"
      }
    },
    TargetProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StatusDetail: {
      shape: {
        type: "string"
      }
    }
  }
};
