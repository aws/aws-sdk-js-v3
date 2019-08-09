import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LayerFailure: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    layerDigest: {
      shape: {
        type: "string"
      }
    },
    failureCode: {
      shape: {
        type: "string"
      }
    },
    failureReason: {
      shape: {
        type: "string"
      }
    }
  }
};
