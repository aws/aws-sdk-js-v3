import { _VpcConfig } from "./_VpcConfig";
import { _DomainJoinInfo } from "./_DomainJoinInfo";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateImageBuilderInput: _Structure_ = {
  type: "structure",
  required: ["Name", "InstanceType"],
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
    VpcConfig: {
      shape: _VpcConfig
    },
    EnableDefaultInternetAccess: {
      shape: {
        type: "boolean"
      }
    },
    DomainJoinInfo: {
      shape: _DomainJoinInfo
    },
    AppstreamAgentVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};
