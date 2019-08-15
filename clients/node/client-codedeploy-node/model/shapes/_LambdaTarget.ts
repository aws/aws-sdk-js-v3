import { _LifecycleEventList } from "./_LifecycleEventList";
import { _LambdaFunctionInfo } from "./_LambdaFunctionInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    targetId: {
      shape: {
        type: "string"
      }
    },
    targetArn: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    lifecycleEvents: {
      shape: _LifecycleEventList
    },
    lambdaFunctionInfo: {
      shape: _LambdaFunctionInfo
    }
  }
};
