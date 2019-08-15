import { _ContainerOverrides } from "./_ContainerOverrides";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskOverride: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerOverrides: {
      shape: _ContainerOverrides
    },
    taskRoleArn: {
      shape: {
        type: "string"
      }
    },
    executionRoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
