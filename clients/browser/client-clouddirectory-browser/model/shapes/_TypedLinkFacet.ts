import { _TypedLinkAttributeDefinitionList } from "./_TypedLinkAttributeDefinitionList";
import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TypedLinkFacet: _Structure_ = {
  type: "structure",
  required: ["Name", "Attributes", "IdentityAttributeOrder"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _TypedLinkAttributeDefinitionList
    },
    IdentityAttributeOrder: {
      shape: _AttributeNameList
    }
  }
};
