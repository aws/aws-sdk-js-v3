import { _LocationList } from "./_LocationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GeoRestriction: _Structure_ = {
  type: "structure",
  required: ["RestrictionType", "Quantity"],
  members: {
    RestrictionType: {
      shape: {
        type: "string"
      }
    },
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _LocationList
    }
  }
};
