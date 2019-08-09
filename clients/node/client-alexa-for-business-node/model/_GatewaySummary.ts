import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GatewaySummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    GatewayGroupArn: {
      shape: {
        type: "string"
      }
    },
    SoftwareVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
