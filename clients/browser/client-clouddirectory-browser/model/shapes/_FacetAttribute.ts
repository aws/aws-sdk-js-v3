import { _FacetAttributeDefinition } from "./_FacetAttributeDefinition";
import { _FacetAttributeReference } from "./_FacetAttributeReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FacetAttribute: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AttributeDefinition: {
      shape: _FacetAttributeDefinition
    },
    AttributeReference: {
      shape: _FacetAttributeReference
    },
    RequiredBehavior: {
      shape: {
        type: "string"
      }
    }
  }
};
