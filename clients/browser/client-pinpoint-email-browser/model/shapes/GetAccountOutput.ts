import { _SendQuota } from "./_SendQuota";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAccountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SendQuota: {
      shape: _SendQuota
    },
    SendingEnabled: {
      shape: {
        type: "boolean"
      }
    },
    DedicatedIpAutoWarmupEnabled: {
      shape: {
        type: "boolean"
      }
    },
    EnforcementStatus: {
      shape: {
        type: "string"
      }
    },
    ProductionAccessEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
