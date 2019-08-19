import { _ListOfCampaignResponse } from "./_ListOfCampaignResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CampaignsResponse: _Structure_ = {
  type: "structure",
  required: ["Item"],
  members: {
    Item: {
      shape: _ListOfCampaignResponse
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
