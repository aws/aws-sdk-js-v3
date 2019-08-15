import { _ComputeCapacity } from "./_ComputeCapacity";
import { _VpcConfig } from "./_VpcConfig";
import { _DomainJoinInfo } from "./_DomainJoinInfo";
import { _FleetAttributes } from "./_FleetAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFleetInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImageName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ImageArn: {
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
    InstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComputeCapacity: {
      shape: _ComputeCapacity
    },
    VpcConfig: {
      shape: _VpcConfig
    },
    MaxUserDurationInSeconds: {
      shape: {
        type: "integer"
      }
    },
    DisconnectTimeoutInSeconds: {
      shape: {
        type: "integer"
      }
    },
    DeleteVpcConfig: {
      shape: {
        type: "boolean"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    },
    EnableDefaultInternetAccess: {
      shape: {
        type: "boolean"
      }
    },
    DomainJoinInfo: {
      shape: _DomainJoinInfo
    },
    IdleDisconnectTimeoutInSeconds: {
      shape: {
        type: "integer"
      }
    },
    AttributesToDelete: {
      shape: _FleetAttributes
    }
  }
};
