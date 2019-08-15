import { _AwsAccountNumberList } from "./_AwsAccountNumberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrustedSigners: _Structure_ = {
  type: "structure",
  required: ["Enabled", "Quantity"],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _AwsAccountNumberList
    }
  }
};
