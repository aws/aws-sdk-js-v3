import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResourceShareInput: _Structure_ = {
  type: "structure",
  required: ["resourceShareArn"],
  members: {
    resourceShareArn: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "resourceShareArn"
    },
    clientToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "clientToken"
    }
  }
};
