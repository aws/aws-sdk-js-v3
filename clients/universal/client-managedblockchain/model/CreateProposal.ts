import { CreateProposalInput } from "./CreateProposalInput";
import { CreateProposalOutput } from "./CreateProposalOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotReadyException } from "./ResourceNotReadyException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
