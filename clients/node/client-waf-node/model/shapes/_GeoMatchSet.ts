import { _GeoMatchConstraints } from "./_GeoMatchConstraints";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GeoMatchSet: _Structure_ = {
  type: "structure",
  required: ["GeoMatchSetId", "GeoMatchConstraints"],
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
    },
    GeoMatchConstraints: {
      shape: _GeoMatchConstraints
    }
  }
};
