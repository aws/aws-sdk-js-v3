import { _ThingGroupNameAndArnList } from "./_ThingGroupNameAndArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingGroupsForThingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingGroups: {
      shape: _ThingGroupNameAndArnList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
