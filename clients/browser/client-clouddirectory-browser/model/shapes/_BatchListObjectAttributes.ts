import { _ObjectReference } from "./_ObjectReference";
import { _SchemaFacet } from "./_SchemaFacet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchListObjectAttributes: _Structure_ = {
  type: "structure",
  required: ["ObjectReference"],
  members: {
    ObjectReference: {
      shape: _ObjectReference
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    FacetFilter: {
      shape: _SchemaFacet
    }
  }
};
