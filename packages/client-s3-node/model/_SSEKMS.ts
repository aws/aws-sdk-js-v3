import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SSEKMS: _Structure_ = {
  type: "structure",
  required: ["KeyId"],
  members: {
    KeyId: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
