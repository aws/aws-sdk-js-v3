import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputDefinition: _Structure_ = {
  type: "structure",
  required: ["attributes"],
  members: {
    attributes: {
      shape: _Attributes
    }
  }
};
