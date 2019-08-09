import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CampaignEmailMessage: _Structure_ = {
  type: "structure",
  required: ["Title"],
  members: {
    Body: {
      shape: {
        type: "string"
      }
    },
    FromAddress: {
      shape: {
        type: "string"
      }
    },
    HtmlBody: {
      shape: {
        type: "string"
      }
    },
    Title: {
      shape: {
        type: "string"
      }
    }
  }
};
