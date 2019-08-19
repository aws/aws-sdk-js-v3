import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGeoMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["GeoMatchSetId"],
  members: {
    GeoMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
