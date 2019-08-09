import { ListProposalsInput } from "./ListProposalsInput";
import { ListProposalsOutput } from "./ListProposalsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
