import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStaticIpInput: _Structure_ = {
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
