import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisionedProductAttribute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastRecordId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _Tags
    },
    PhysicalId: {
      shape: {
        type: "string"
      }
    },
    ProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisioningArtifactId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserArn: {
      shape: {
        type: "string"
      }
    },
    UserArnSession: {
      shape: {
        type: "string"
      }
    }
  }
};
