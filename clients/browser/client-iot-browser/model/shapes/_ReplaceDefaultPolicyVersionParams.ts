import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplaceDefaultPolicyVersionParams: _Structure_ = {
  type: "structure",
  required: ["templateName"],
  members: {
    templateName: {
      shape: {
        type: "string"
      }
    }
  }
};
