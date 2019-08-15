import { _ThingGroupProperties } from "./_ThingGroupProperties";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDynamicThingGroupInput: _Structure_ = {
  type: "structure",
  required: ["thingGroupName", "queryString"],
  members: {
    thingGroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingGroupName"
    },
    thingGroupProperties: {
      shape: _ThingGroupProperties
    },
    indexName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    queryString: {
      shape: {
        type: "string",
        min: 1
      }
    },
    queryVersion: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
