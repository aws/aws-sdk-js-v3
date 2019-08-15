import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableVpcClassicLinkOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Return: {
      shape: {
        type: "boolean"
      },
      locationName: "return"
    }
  }
};
