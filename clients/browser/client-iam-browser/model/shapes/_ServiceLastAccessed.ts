import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceLastAccessed: _Structure_ = {
  type: "structure",
  required: ["ServiceName", "ServiceNamespace"],
  members: {
    ServiceName: {
      shape: {
        type: "string"
      }
    },
    LastAuthenticated: {
      shape: {
        type: "timestamp"
      }
    },
    ServiceNamespace: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastAuthenticatedEntity: {
      shape: {
        type: "string",
        min: 20
      }
    },
    TotalAuthenticatedEntities: {
      shape: {
        type: "integer"
      }
    }
  }
};
