import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopTransformJobInput: _Structure_ = {
  type: "structure",
  required: ["TransformJobName"],
  members: {
    TransformJobName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
