import { _ThingGroupProperties } from "./_ThingGroupProperties";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateThingGroupInput: _Structure_ = {
  type: "structure",
  required: ["thingGroupName"],
  members: {
    thingGroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingGroupName"
    },
    parentGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingGroupProperties: {
      shape: _ThingGroupProperties
    },
    tags: {
      shape: _TagList
    }
  }
};
