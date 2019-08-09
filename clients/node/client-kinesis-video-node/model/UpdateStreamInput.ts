import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStreamInput: _Structure_ = {
  type: "structure",
  required: ["CurrentVersion"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeviceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MediaType: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
