import { ListProposalsInput } from "../shapes/ListProposalsInput";
import { ListProposalsOutput } from "../shapes/ListProposalsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListProposals: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProposals",
  http: {
    method: "GET",
    requestUri: "/networks/{networkId}/proposals"
  },
  input: {
    shape: ListProposalsInput
  },
  output: {
    shape: ListProposalsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
