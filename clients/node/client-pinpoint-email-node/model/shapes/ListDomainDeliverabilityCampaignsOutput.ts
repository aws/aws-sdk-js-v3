import { _DomainDeliverabilityCampaignList } from "./_DomainDeliverabilityCampaignList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDomainDeliverabilityCampaignsOutput: _Structure_ = {
  type: "structure",
  required: ["DomainDeliverabilityCampaigns"],
  members: {
    DomainDeliverabilityCampaigns: {
      shape: _DomainDeliverabilityCampaignList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
