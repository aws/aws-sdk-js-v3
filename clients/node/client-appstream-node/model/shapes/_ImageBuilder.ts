import { _VpcConfig } from "./_VpcConfig";
import { _ImageBuilderStateChangeReason } from "./_ImageBuilderStateChangeReason";
import { _DomainJoinInfo } from "./_DomainJoinInfo";
import { _NetworkAccessConfiguration } from "./_NetworkAccessConfiguration";
import { _ResourceErrors } from "./_ResourceErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImageBuilder: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    ImageArn: {
      shape: {
        type: "string"
      }
    },
    Description: {
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
    VpcConfig: {
      shape: _VpcConfig
    },
    InstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    StateChangeReason: {
      shape: _ImageBuilderStateChangeReason
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
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
    NetworkAccessConfiguration: {
      shape: _NetworkAccessConfiguration
    },
    ImageBuilderErrors: {
      shape: _ResourceErrors
    },
    AppstreamAgentVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
