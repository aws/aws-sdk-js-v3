import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RedirectActionConfig: _Structure_ = {
  type: "structure",
  required: ["StatusCode"],
  members: {
    Protocol: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "string"
      }
    },
    Host: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Query: {
      shape: {
        type: "string"
      }
    },
    StatusCode: {
      shape: {
        type: "string"
      }
    }
  }
};
