import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUploadInput: _Structure_ = {
  type: "structure",
  required: ["projectArn", "name", "type"],
  members: {
    projectArn: {
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
    type: {
      shape: {
        type: "string"
      }
    },
    contentType: {
      shape: {
        type: "string"
      }
    }
  }
};
