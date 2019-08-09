import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Instance: _Structure_ = {
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
    Type: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
