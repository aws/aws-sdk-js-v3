import { _ContainerProperties } from "./_ContainerProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeRangeProperty: _Structure_ = {
  type: "structure",
  required: ["targetNodes"],
  members: {
    targetNodes: {
      shape: {
        type: "string"
      }
    },
    container: {
      shape: _ContainerProperties
    }
  }
};
