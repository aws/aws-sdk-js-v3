import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateKeyPairInput: _Structure_ = {
  type: "structure",
  required: ["keyPairName"],
  members: {
    keyPairName: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
