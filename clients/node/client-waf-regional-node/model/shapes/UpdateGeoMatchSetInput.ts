import { _GeoMatchSetUpdates } from "./_GeoMatchSetUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGeoMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["GeoMatchSetId", "ChangeToken", "Updates"],
  members: {
    GeoMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Updates: {
      shape: _GeoMatchSetUpdates
    }
  }
};
