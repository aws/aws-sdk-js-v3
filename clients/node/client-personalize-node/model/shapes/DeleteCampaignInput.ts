import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCampaignInput: _Structure_ = {
  type: "structure",
  required: ["campaignArn"],
  members: {
    campaignArn: {
      shape: {
        type: "string"
      }
    }
  }
};
