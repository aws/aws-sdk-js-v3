import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisioningArtifact: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Guidance: {
      shape: {
        type: "string"
      }
    }
  }
};
