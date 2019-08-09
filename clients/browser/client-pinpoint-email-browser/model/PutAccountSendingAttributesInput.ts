import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAccountSendingAttributesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SendingEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
