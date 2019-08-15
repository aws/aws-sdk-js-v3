import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GeoMatchSetSummary: _Structure_ = {
  type: "structure",
  required: ["GeoMatchSetId", "Name"],
  members: {
    GeoMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
