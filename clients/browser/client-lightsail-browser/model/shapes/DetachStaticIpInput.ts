import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachStaticIpInput: _Structure_ = {
  type: "structure",
  required: ["staticIpName"],
  members: {
    staticIpName: {
      shape: {
        type: "string"
      }
    }
  }
};
