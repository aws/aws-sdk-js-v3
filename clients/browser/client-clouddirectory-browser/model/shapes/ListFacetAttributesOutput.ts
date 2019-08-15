import { _FacetAttributeList } from "./_FacetAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFacetAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _FacetAttributeList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
