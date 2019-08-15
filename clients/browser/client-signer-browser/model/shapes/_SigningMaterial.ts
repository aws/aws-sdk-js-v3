import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SigningMaterial: _Structure_ = {
  type: "structure",
  required: ["certificateArn"],
  members: {
    certificateArn: {
      shape: {
        type: "string"
      }
    }
  }
};
