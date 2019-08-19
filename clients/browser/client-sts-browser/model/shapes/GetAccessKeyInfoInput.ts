import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAccessKeyInfoInput: _Structure_ = {
  type: "structure",
  required: ["AccessKeyId"],
  members: {
    AccessKeyId: {
      shape: {
        type: "string",
        min: 16
      }
    }
  }
};
