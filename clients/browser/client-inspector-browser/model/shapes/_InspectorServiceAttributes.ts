import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InspectorServiceAttributes: _Structure_ = {
  type: "structure",
  required: ["schemaVersion"],
  members: {
    schemaVersion: {
      shape: {
        type: "integer"
      }
    },
    assessmentRunArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    rulesPackageArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
