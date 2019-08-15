import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DedicatedIp: _Structure_ = {
  type: "structure",
  required: ["Ip", "WarmupStatus", "WarmupPercentage"],
  members: {
    Ip: {
      shape: {
        type: "string"
      }
    },
    WarmupStatus: {
      shape: {
        type: "string"
      }
    },
    WarmupPercentage: {
      shape: {
        type: "integer"
      }
    },
    PoolName: {
      shape: {
        type: "string"
      }
    }
  }
};
