import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteV2LoggingLevelInput: _Structure_ = {
  type: "structure",
  required: ["targetType", "targetName"],
  members: {
    targetType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "targetType"
    },
    targetName: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "targetName"
    }
  }
};
