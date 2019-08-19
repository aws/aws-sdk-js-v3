import { GetDomainDeliverabilityCampaignInput } from "../shapes/GetDomainDeliverabilityCampaignInput";
import { GetDomainDeliverabilityCampaignOutput } from "../shapes/GetDomainDeliverabilityCampaignOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
