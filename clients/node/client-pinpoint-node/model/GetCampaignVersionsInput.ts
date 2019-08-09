import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCampaignVersionsInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "CampaignId"],
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
    PageSize: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "page-size"
    },
    Token: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "token"
    }
  }
};
