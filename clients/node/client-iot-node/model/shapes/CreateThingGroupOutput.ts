import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateThingGroupOutput: _Structure_ = {
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
    thingGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
