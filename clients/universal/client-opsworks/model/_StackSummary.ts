import { _InstancesCount } from "./_InstancesCount";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    LayersCount: {
      shape: {
        type: "integer"
      }
    },
    AppsCount: {
      shape: {
        type: "integer"
      }
    },
    InstancesCount: {
      shape: _InstancesCount
    }
  }
};
