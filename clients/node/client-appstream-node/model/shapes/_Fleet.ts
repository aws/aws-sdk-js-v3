import { _ComputeCapacityStatus } from "./_ComputeCapacityStatus";
import { _VpcConfig } from "./_VpcConfig";
import { _FleetErrors } from "./_FleetErrors";
import { _DomainJoinInfo } from "./_DomainJoinInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Fleet: _Structure_ = {
  type: "structure",
  required: ["Arn", "Name", "InstanceType", "ComputeCapacityStatus", "State"],
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
    DisplayName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    InstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FleetType: {
      shape: {
        type: "string"
      }
    },
    ComputeCapacityStatus: {
      shape: _ComputeCapacityStatus
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
    State: {
      shape: {
        type: "string"
      }
    },
    VpcConfig: {
      shape: _VpcConfig
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    FleetErrors: {
      shape: _FleetErrors
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
    }
  }
};
