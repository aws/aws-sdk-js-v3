import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainDeliverabilityCampaignInput: _Structure_ = {
  type: "structure",
  required: ["CampaignId"],
  members: {
    CampaignId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "CampaignId"
    }
  }
};
