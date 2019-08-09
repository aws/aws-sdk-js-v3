import { _TypedLinkSchemaAndFacetName } from "./_TypedLinkSchemaAndFacetName";
import { _ObjectReference } from "./_ObjectReference";
import { _AttributeNameAndValueList } from "./_AttributeNameAndValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TypedLinkSpecifier: _Structure_ = {
  type: "structure",
  required: [
    "TypedLinkFacet",
    "SourceObjectReference",
    "TargetObjectReference",
    "IdentityAttributeValues"
  ],
  members: {
    TypedLinkFacet: {
      shape: _TypedLinkSchemaAndFacetName
    },
    SourceObjectReference: {
      shape: _ObjectReference
    },
    TargetObjectReference: {
      shape: _ObjectReference
    },
    IdentityAttributeValues: {
      shape: _AttributeNameAndValueList
    }
  }
};
