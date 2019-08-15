import { _ThingTypeList } from "./_ThingTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingTypes: {
      shape: _ThingTypeList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
