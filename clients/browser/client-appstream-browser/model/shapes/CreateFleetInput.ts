import { _ComputeCapacity } from "./_ComputeCapacity";
import { _VpcConfig } from "./_VpcConfig";
import { _DomainJoinInfo } from "./_DomainJoinInfo";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFleetInput: _Structure_ = {
  type: "structure",
  required: ["Name", "InstanceType", "ComputeCapacity"],
  members: {
    Name: {
      shape: {
        type: "string"
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
    Tags: {
      shape: _Tags
    },
    IdleDisconnectTimeoutInSeconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
