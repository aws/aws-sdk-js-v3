import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteKeyPairInput: _Structure_ = {
  type: "structure",
  required: ["keyPairName"],
  members: {
    keyPairName: {
      shape: {
        type: "string"
      }
    }
  }
};
