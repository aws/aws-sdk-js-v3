import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCollectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StatusCode: {
      shape: {
        type: "integer"
      }
    },
    CollectionArn: {
      shape: {
        type: "string"
      }
    },
    FaceModelVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
