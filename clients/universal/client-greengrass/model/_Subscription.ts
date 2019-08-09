import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Subscription: _Structure_ = {
  type: "structure",
  required: ["Target", "Id", "Subject", "Source"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Source: {
      shape: {
        type: "string"
      }
    },
    Subject: {
      shape: {
        type: "string"
      }
    },
    Target: {
      shape: {
        type: "string"
      }
    }
  }
};
