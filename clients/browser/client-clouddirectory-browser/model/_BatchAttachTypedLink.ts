import { _ObjectReference } from "./_ObjectReference";
import { _TypedLinkSchemaAndFacetName } from "./_TypedLinkSchemaAndFacetName";
import { _AttributeNameAndValueList } from "./_AttributeNameAndValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchAttachTypedLink: _Structure_ = {
  type: "structure",
  required: [
    "SourceObjectReference",
    "TargetObjectReference",
    "TypedLinkFacet",
    "Attributes"
  ],
  members: {
    SourceObjectReference: {
      shape: _ObjectReference
    },
    TargetObjectReference: {
      shape: _ObjectReference
    },
    TypedLinkFacet: {
      shape: _TypedLinkSchemaAndFacetName
    },
    Attributes: {
      shape: _AttributeNameAndValueList
    }
  }
};
