import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccessDetail: _Structure_ = {
  type: "structure",
  required: ["ServiceName", "ServiceNamespace"],
  members: {
    ServiceName: {
      shape: {
        type: "string"
      }
    },
    ServiceNamespace: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    EntityPath: {
      shape: {
        type: "string",
        min: 19
      }
    },
    LastAuthenticatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    TotalAuthenticatedEntities: {
      shape: {
        type: "integer"
      }
    }
  }
};
