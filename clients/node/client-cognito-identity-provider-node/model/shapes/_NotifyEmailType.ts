import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotifyEmailType: _Structure_ = {
  type: "structure",
  required: ["Subject"],
  members: {
    Subject: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HtmlBody: {
      shape: {
        type: "string",
        min: 6
      }
    },
    TextBody: {
      shape: {
        type: "string",
        min: 6
      }
    }
  }
};
