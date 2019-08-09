import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SipAddress: _Structure_ = {
  type: "structure",
  required: ["Uri", "Type"],
  members: {
    Uri: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
