import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCampaignInput: _Structure_ = {
  type: "structure",
  required: ["CampaignId", "ApplicationId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    CampaignId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "campaign-id"
    }
  }
};
