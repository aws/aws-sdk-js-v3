import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VersionInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    agentVersion: {
      shape: {
        type: "string"
      }
    },
    agentHash: {
      shape: {
        type: "string"
      }
    },
    dockerVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
