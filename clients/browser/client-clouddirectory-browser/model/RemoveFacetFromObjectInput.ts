import { _SchemaFacet } from "./_SchemaFacet";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveFacetFromObjectInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "SchemaFacet", "ObjectReference"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    SchemaFacet: {
      shape: _SchemaFacet
    },
    ObjectReference: {
      shape: _ObjectReference
    }
  }
};
