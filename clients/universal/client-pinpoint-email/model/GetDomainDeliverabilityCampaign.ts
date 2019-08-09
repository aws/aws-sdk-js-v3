import { GetDomainDeliverabilityCampaignInput } from "./GetDomainDeliverabilityCampaignInput";
import { GetDomainDeliverabilityCampaignOutput } from "./GetDomainDeliverabilityCampaignOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDomainDeliverabilityCampaign: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDomainDeliverabilityCampaign",
  http: {
    method: "GET",
    requestUri: "/v1/email/deliverability-dashboard/campaigns/{CampaignId}"
  },
  input: {
    shape: GetDomainDeliverabilityCampaignInput
  },
  output: {
    shape: GetDomainDeliverabilityCampaignOutput
  },
  errors: [
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    }
  ]
};
