import { _ImageIdentifier } from "./_ImageIdentifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImageFailure: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    imageId: {
      shape: _ImageIdentifier
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
