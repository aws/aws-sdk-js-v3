import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobManifestLocation: _Structure_ = {
  type: "structure",
  required: ["ObjectArn", "ETag"],
  members: {
    ObjectArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ObjectVersionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ETag: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
