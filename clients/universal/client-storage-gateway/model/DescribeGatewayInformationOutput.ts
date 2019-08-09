import { _GatewayNetworkInterfaces } from "./_GatewayNetworkInterfaces";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGatewayInformationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    GatewayId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    GatewayName: {
      shape: {
        type: "string"
      }
    },
    GatewayTimezone: {
      shape: {
        type: "string",
        min: 3
      }
    },
    GatewayState: {
      shape: {
        type: "string",
        min: 2
      }
    },
    GatewayNetworkInterfaces: {
      shape: _GatewayNetworkInterfaces
    },
    GatewayType: {
      shape: {
        type: "string",
        min: 2
      }
    },
    NextUpdateAvailabilityDate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastSoftwareUpdate: {
      shape: {
        type: "string",
        min: 1
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
    },
    Tags: {
      shape: _Tags
    },
    VPCEndpoint: {
      shape: {
        type: "string"
      }
    }
  }
};
