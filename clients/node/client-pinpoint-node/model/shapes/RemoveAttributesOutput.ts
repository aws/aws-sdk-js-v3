import { _AttributesResource } from "./_AttributesResource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveAttributesOutput: _Structure_ = {
  type: "structure",
  required: ["AttributesResource"],
  members: {
    AttributesResource: {
      shape: _AttributesResource
    }
  },
  payload: "AttributesResource"
};
