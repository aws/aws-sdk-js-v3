import { _ImageStateChangeReason } from "./_ImageStateChangeReason";
import { _Applications } from "./_Applications";
import { _ImagePermissions } from "./_ImagePermissions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Image: _Structure_ = {
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
    BaseImageArn: {
      shape: {
        type: "string"
      }
    },
    DisplayName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    Visibility: {
      shape: {
        type: "string"
      }
    },
    ImageBuilderSupported: {
      shape: {
        type: "boolean"
      }
    },
    ImageBuilderName: {
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
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StateChangeReason: {
      shape: _ImageStateChangeReason
    },
    Applications: {
      shape: _Applications
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    PublicBaseImageReleasedDate: {
      shape: {
        type: "timestamp"
      }
    },
    AppstreamAgentVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ImagePermissions: {
      shape: _ImagePermissions
    }
  }
};
