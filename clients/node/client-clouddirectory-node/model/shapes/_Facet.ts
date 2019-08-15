import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Facet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ObjectType: {
      shape: {
        type: "string"
      }
    },
    FacetStyle: {
      shape: {
        type: "string"
      }
    }
  }
};
