import { Structure as _Structure_ } from "@aws-sdk/types";

export const VerifySoftwareTokenOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    Session: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
