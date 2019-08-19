import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AgentNetworkInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ipAddress: {
      shape: {
        type: "string"
      }
    },
    macAddress: {
      shape: {
        type: "string"
      }
    }
  }
};
