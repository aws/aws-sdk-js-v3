import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GatewayInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    GatewayType: {
      shape: {
        type: "string",
        min: 2
      }
    },
    GatewayOperationalState: {
      shape: {
        type: "string",
        min: 2
      }
    },
    GatewayName: {
      shape: {
        type: "string"
      }
    },
    Ec2InstanceId: {
      shape: {
        type: "string"
      }
    },
    Ec2InstanceRegion: {
      shape: {
        type: "string"
      }
    }
  }
};
