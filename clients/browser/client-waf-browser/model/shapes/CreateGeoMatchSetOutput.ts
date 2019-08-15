import { _GeoMatchSet } from "./_GeoMatchSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGeoMatchSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GeoMatchSet: {
      shape: _GeoMatchSet
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
