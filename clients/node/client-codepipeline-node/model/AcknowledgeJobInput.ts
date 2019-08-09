import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcknowledgeJobInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "nonce"],
  members: {
    jobId: {
      shape: {
        type: "string"
      }
    },
    nonce: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
