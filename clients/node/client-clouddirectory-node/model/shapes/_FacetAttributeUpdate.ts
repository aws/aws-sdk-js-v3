import { _FacetAttribute } from "./_FacetAttribute";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FacetAttributeUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attribute: {
      shape: _FacetAttribute
    },
    Action: {
      shape: {
        type: "string"
      }
    }
  }
};
