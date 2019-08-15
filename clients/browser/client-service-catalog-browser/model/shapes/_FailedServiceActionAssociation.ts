import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailedServiceActionAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceActionId: {
      shape: {
        type: "string",
        min: 1
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
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
