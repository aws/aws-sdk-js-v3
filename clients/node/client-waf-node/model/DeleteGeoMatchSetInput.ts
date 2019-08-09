import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteGeoMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["GeoMatchSetId", "ChangeToken"],
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
    }
  }
};
