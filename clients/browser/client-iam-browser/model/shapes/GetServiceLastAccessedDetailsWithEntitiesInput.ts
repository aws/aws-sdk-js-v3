import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetServiceLastAccessedDetailsWithEntitiesInput: _Structure_ = {
  type: "structure",
  required: ["JobId", "ServiceNamespace"],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    ServiceNamespace: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
