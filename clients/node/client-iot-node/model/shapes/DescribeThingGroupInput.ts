import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeThingGroupInput: _Structure_ = {
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
    }
  }
};
