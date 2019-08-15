import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SSEDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    SSEType: {
      shape: {
        type: "string"
      }
    },
    KMSMasterKeyArn: {
      shape: {
        type: "string"
      }
    }
  }
};
