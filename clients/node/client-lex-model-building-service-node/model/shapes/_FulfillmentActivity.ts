import { _CodeHook } from "./_CodeHook";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FulfillmentActivity: _Structure_ = {
  type: "structure",
  required: ["type"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    codeHook: {
      shape: _CodeHook
    }
  }
};
