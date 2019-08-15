import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProvisioningArtifactDetail: _Structure_ = {
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
    Type: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Active: {
      shape: {
        type: "boolean"
      }
    },
    Guidance: {
      shape: {
        type: "string"
      }
    }
  }
};
