import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDiskInput: _Structure_ = {
  type: "structure",
  required: ["diskName"],
  members: {
    diskName: {
      shape: {
        type: "string"
      }
    }
  }
};
