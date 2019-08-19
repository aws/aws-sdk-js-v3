import { _Message } from "./_Message";
import { _RawMessage } from "./_RawMessage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EmailContent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Simple: {
      shape: _Message
    },
    Raw: {
      shape: _RawMessage
    }
  }
};
