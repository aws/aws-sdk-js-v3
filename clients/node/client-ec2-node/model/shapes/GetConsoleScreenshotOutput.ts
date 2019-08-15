import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConsoleScreenshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImageData: {
      shape: {
        type: "string"
      },
      locationName: "imageData"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    }
  }
};
