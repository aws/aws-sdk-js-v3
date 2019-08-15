import { _InstanceResizePolicy } from "./_InstanceResizePolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ShrinkPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DecommissionTimeout: {
      shape: {
        type: "integer"
      }
    },
    InstanceResizePolicy: {
      shape: _InstanceResizePolicy
    }
  }
};
