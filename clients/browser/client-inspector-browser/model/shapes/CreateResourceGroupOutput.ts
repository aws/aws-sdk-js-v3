import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResourceGroupOutput: _Structure_ = {
  type: "structure",
  required: ["resourceGroupArn"],
  members: {
    resourceGroupArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
