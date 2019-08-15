import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachStaticIpInput: _Structure_ = {
  type: "structure",
  required: ["staticIpName", "instanceName"],
  members: {
    staticIpName: {
      shape: {
        type: "string"
      }
    },
    instanceName: {
      shape: {
        type: "string"
      }
    }
  }
};
