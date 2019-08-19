import { CreateProposalInput } from "../shapes/CreateProposalInput";
import { CreateProposalOutput } from "../shapes/CreateProposalOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceNotReadyException } from "../shapes/ResourceNotReadyException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateProposal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProposal",
  http: {
    method: "POST",
    requestUri: "/networks/{networkId}/proposals"
  },
  input: {
    shape: CreateProposalInput
  },
  output: {
    shape: CreateProposalOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceNotReadyException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
