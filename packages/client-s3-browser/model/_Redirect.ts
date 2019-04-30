import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Redirect: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HostName: {
      shape: {
        type: "string"
      }
    },
    HttpRedirectCode: {
      shape: {
        type: "string"
      }
    },
    Protocol: {
      shape: {
        type: "string"
      }
    },
    ReplaceKeyPrefixWith: {
      shape: {
        type: "string"
      }
    },
    ReplaceKeyWith: {
      shape: {
        type: "string"
      }
    }
  }
};
