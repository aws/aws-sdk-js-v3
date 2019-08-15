import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyId: {
      shape: {
        type: "string"
      }
    },
    ObjectIdentifier: {
      shape: {
        type: "string"
      }
    },
    PolicyType: {
      shape: {
        type: "string"
      }
    }
  }
};
