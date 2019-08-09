import { _SearchableAttributes } from "./_SearchableAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingTypeProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingTypeDescription: {
      shape: {
        type: "string"
      }
    },
    searchableAttributes: {
      shape: _SearchableAttributes
    }
  }
};
