import { _ThingGroupNames } from "./_ThingGroupNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AddThingsToThingGroupParams: _Structure_ = {
  type: "structure",
  required: ["thingGroupNames"],
  members: {
    thingGroupNames: {
      shape: _ThingGroupNames
    },
    overrideDynamicGroups: {
      shape: {
        type: "boolean"
      }
    }
  }
};
