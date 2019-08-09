import { _GeoMatchConstraint } from "./_GeoMatchConstraint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GeoMatchSetUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "GeoMatchConstraint"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    GeoMatchConstraint: {
      shape: _GeoMatchConstraint
    }
  }
};
