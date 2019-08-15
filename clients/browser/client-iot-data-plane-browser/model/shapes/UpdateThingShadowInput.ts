import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateThingShadowInput: _Structure_ = {
  type: "structure",
  required: ["thingName", "payload"],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingName"
    },
    payload: {
      shape: {
        type: "blob"
      }
    }
  },
  payload: "payload"
};
