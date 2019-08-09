import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddThingToThingGroupInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingGroupArn: {
      shape: {
        type: "string"
      }
    },
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingArn: {
      shape: {
        type: "string"
      }
    },
    overrideDynamicGroups: {
      shape: {
        type: "boolean"
      }
    }
  }
};
