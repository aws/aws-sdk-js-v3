import { _ObjectReference } from "./_ObjectReference";
import { _TypedLinkSchemaAndFacetName } from "./_TypedLinkSchemaAndFacetName";
import { _AttributeNameAndValueList } from "./_AttributeNameAndValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachTypedLinkInput: _Structure_ = {
  type: "structure",
  required: [
    "DirectoryArn",
    "SourceObjectReference",
    "TargetObjectReference",
    "TypedLinkFacet",
    "Attributes"
  ],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
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
