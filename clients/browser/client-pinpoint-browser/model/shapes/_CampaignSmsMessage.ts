import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CampaignSmsMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Body: {
      shape: {
        type: "string"
      }
    },
    MessageType: {
      shape: {
        type: "string"
      }
    },
    SenderId: {
      shape: {
        type: "string"
      }
    }
  }
};
