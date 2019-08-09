import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCampaignVersionInput: _Structure_ = {
  type: "structure",
  required: ["Version", "ApplicationId", "CampaignId"],
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
    },
    Version: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "version"
    }
  }
};
