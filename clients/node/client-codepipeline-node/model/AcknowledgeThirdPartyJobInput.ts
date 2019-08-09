import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcknowledgeThirdPartyJobInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "nonce", "clientToken"],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    nonce: {
      shape: {
        type: "string",
        min: 1
      }
    },
    clientToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
