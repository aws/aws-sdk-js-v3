import { _ThingGroupList } from "./_ThingGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateThingGroupsForThingInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingGroupsToAdd: {
      shape: _ThingGroupList
    },
    thingGroupsToRemove: {
      shape: _ThingGroupList
    },
    overrideDynamicGroups: {
      shape: {
        type: "boolean"
      }
    }
  }
};
