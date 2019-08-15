import { _SchemaFacet } from "./_SchemaFacet";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchRemoveFacetFromObject: _Structure_ = {
  type: "structure",
  required: ["SchemaFacet", "ObjectReference"],
  members: {
    SchemaFacet: {
      shape: _SchemaFacet
    },
    ObjectReference: {
      shape: _ObjectReference
    }
  }
};
