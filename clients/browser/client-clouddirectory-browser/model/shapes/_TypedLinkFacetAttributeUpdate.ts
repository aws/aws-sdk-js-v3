import { _TypedLinkAttributeDefinition } from "./_TypedLinkAttributeDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TypedLinkFacetAttributeUpdate: _Structure_ = {
  type: "structure",
  required: ["Attribute", "Action"],
  members: {
    Attribute: {
      shape: _TypedLinkAttributeDefinition
    },
    Action: {
      shape: {
        type: "string"
      }
    }
  }
};
