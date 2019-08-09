import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FacetAttributeReference: _Structure_ = {
  type: "structure",
  required: ["TargetFacetName", "TargetAttributeName"],
  members: {
    TargetFacetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetAttributeName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
