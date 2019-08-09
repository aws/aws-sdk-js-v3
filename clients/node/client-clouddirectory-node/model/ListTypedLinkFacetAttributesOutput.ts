import { _TypedLinkAttributeDefinitionList } from "./_TypedLinkAttributeDefinitionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTypedLinkFacetAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _TypedLinkAttributeDefinitionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
