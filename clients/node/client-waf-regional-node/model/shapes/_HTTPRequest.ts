import { _HTTPHeaders } from "./_HTTPHeaders";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HTTPRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientIP: {
      shape: {
        type: "string"
      }
    },
    Country: {
      shape: {
        type: "string"
      }
    },
    URI: {
      shape: {
        type: "string"
      }
    },
    Method: {
      shape: {
        type: "string"
      }
    },
    HTTPVersion: {
      shape: {
        type: "string"
      }
    },
    Headers: {
      shape: _HTTPHeaders
    }
  }
};
