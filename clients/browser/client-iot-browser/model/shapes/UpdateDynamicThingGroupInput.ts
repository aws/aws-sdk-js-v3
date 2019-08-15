import { _ThingGroupProperties } from "./_ThingGroupProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDynamicThingGroupInput: _Structure_ = {
  type: "structure",
  required: ["thingGroupName", "thingGroupProperties"],
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
    expectedVersion: {
      shape: {
        type: "integer"
      }
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
    }
  }
};
