import { _ThingTypeProperties } from "./_ThingTypeProperties";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateThingTypeInput: _Structure_ = {
  type: "structure",
  required: ["thingTypeName"],
  members: {
    thingTypeName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingTypeName"
    },
    thingTypeProperties: {
      shape: _ThingTypeProperties
    },
    tags: {
      shape: _TagList
    }
  }
};
