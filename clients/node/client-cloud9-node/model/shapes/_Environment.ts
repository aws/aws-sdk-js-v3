import { _EnvironmentLifecycle } from "./_EnvironmentLifecycle";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Environment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    ownerArn: {
      shape: {
        type: "string"
      }
    },
    lifecycle: {
      shape: _EnvironmentLifecycle
    }
  }
};
