import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomAmi: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VirtualizationType: {
      shape: {
        type: "string"
      }
    },
    ImageId: {
      shape: {
        type: "string"
      }
    }
  }
};
