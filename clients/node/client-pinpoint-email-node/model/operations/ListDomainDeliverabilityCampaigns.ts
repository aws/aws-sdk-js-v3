import { ListDomainDeliverabilityCampaignsInput } from "../shapes/ListDomainDeliverabilityCampaignsInput";
import { ListDomainDeliverabilityCampaignsOutput } from "../shapes/ListDomainDeliverabilityCampaignsOutput";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDomainDeliverabilityCampaigns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDomainDeliverabilityCampaigns",
  http: {
    method: "GET",
    requestUri:
      "/v1/email/deliverability-dashboard/domains/{SubscribedDomain}/campaigns"
  },
  input: {
    shape: ListDomainDeliverabilityCampaignsInput
  },
  output: {
    shape: ListDomainDeliverabilityCampaignsOutput
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
