import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCampaignsInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
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
