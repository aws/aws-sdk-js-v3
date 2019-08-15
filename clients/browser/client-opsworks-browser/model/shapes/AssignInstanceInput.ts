import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssignInstanceInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId", "LayerIds"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    LayerIds: {
      shape: _Strings
    }
  }
};
