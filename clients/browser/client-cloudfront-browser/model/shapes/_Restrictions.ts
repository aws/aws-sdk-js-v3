import { _GeoRestriction } from "./_GeoRestriction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Restrictions: _Structure_ = {
  type: "structure",
  required: ["GeoRestriction"],
  members: {
    GeoRestriction: {
      shape: _GeoRestriction
    }
  }
};
