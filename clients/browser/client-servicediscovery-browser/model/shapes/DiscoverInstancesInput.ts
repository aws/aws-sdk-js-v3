import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DiscoverInstancesInput: _Structure_ = {
  type: "structure",
  required: ["NamespaceName", "ServiceName"],
  members: {
    NamespaceName: {
      shape: {
        type: "string"
      }
    },
    ServiceName: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    QueryParameters: {
      shape: _Attributes
    },
    HealthStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
