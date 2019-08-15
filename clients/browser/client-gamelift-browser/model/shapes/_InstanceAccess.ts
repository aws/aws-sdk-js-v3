import { _InstanceCredentials } from "./_InstanceCredentials";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceAccess: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    IpAddress: {
      shape: {
        type: "string"
      }
    },
    OperatingSystem: {
      shape: {
        type: "string"
      }
    },
    Credentials: {
      shape: _InstanceCredentials
    }
  }
};
