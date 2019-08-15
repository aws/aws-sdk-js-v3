import { _Attributes } from "./_Attributes";
import { _ThingGroupNameList } from "./_ThingGroupNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingGroupDocument: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingGroupDescription: {
      shape: {
        type: "string"
      }
    },
    attributes: {
      shape: _Attributes
    },
    parentGroupNames: {
      shape: _ThingGroupNameList
    }
  }
};
