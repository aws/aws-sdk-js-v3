import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachThingPrincipalInput: _Structure_ = {
  type: "structure",
  required: ["thingName", "principal"],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingName"
    },
    principal: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amzn-principal"
    }
  }
};
