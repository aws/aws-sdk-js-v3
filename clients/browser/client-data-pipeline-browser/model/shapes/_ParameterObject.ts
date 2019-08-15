import { _ParameterAttributeList } from "./_ParameterAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterObject: _Structure_ = {
  type: "structure",
  required: ["id", "attributes"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    attributes: {
      shape: _ParameterAttributeList
    }
  }
};
