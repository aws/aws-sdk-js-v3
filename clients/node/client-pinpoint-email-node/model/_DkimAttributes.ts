import { _DnsTokenList } from "./_DnsTokenList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DkimAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SigningEnabled: {
      shape: {
        type: "boolean"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Tokens: {
      shape: _DnsTokenList
    }
  }
};
