import { _ObjectReference } from "./_ObjectReference";
import { _SchemaFacet } from "./_SchemaFacet";
import { _AttributeNameList } from "./_AttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetObjectAttributesInput: _Structure_ = {
  type: "structure",
  required: [
    "DirectoryArn",
    "ObjectReference",
    "SchemaFacet",
    "AttributeNames"
  ],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    ObjectReference: {
      shape: _ObjectReference
    },
    ConsistencyLevel: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-consistency-level"
    },
    SchemaFacet: {
      shape: _SchemaFacet
    },
    AttributeNames: {
      shape: _AttributeNameList
    }
  }
};
