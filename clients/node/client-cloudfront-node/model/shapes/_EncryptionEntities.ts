import { _EncryptionEntityList } from "./_EncryptionEntityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionEntities: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _EncryptionEntityList
    }
  }
};
