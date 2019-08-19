import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUploadInput: _Structure_ = {
  type: "structure",
  required: ["arn"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    contentType: {
      shape: {
        type: "string"
      }
    },
    editContent: {
      shape: {
        type: "boolean"
      }
    }
  }
};
