import { _ThingGroupNameAndArnList } from "./_ThingGroupNameAndArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingGroupMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    parentGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    rootToParentThingGroups: {
      shape: _ThingGroupNameAndArnList
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
