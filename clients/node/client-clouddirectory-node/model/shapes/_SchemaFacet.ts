import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SchemaFacet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SchemaArn: {
      shape: {
        type: "string"
      }
    },
    FacetName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
