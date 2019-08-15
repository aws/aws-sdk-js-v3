import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStreamOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    streamId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    streamArn: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    streamVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
