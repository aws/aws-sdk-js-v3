import { ListDomainDeliverabilityCampaignsInput } from "./ListDomainDeliverabilityCampaignsInput";
import { ListDomainDeliverabilityCampaignsOutput } from "./ListDomainDeliverabilityCampaignsOutput";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
