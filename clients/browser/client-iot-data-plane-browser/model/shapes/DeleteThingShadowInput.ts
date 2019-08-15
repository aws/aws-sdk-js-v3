import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteThingShadowInput: _Structure_ = {
  type: "structure",
  required: ["thingName"],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingName"
    }
  }
};
