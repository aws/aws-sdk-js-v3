import { _DomainDeliverabilityCampaign } from "./_DomainDeliverabilityCampaign";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainDeliverabilityCampaignOutput: _Structure_ = {
  type: "structure",
  required: ["DomainDeliverabilityCampaign"],
  members: {
    DomainDeliverabilityCampaign: {
      shape: _DomainDeliverabilityCampaign
    }
  }
};
