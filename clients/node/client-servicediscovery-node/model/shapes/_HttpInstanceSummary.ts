import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HttpInstanceSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
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
    HealthStatus: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _Attributes
    }
  }
};
