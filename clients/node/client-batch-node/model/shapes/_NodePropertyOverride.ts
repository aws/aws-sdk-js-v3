import { _ContainerOverrides } from "./_ContainerOverrides";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodePropertyOverride: _Structure_ = {
  type: "structure",
  required: ["targetNodes"],
  members: {
    targetNodes: {
      shape: {
        type: "string"
      }
    },
    containerOverrides: {
      shape: _ContainerOverrides
    }
  }
};
