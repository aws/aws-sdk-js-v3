import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteOptionGroupInput: _Structure_ = {
  type: "structure",
  required: ["OptionGroupName"],
  members: {
    OptionGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
