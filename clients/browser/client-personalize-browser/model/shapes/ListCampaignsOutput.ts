import { _Campaigns } from "./_Campaigns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCampaignsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    campaigns: {
      shape: _Campaigns
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
