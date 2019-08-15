import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationVersionInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "VersionLabel"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionLabel: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
