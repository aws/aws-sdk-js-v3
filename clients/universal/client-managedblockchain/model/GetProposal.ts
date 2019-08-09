import { GetProposalInput } from "./GetProposalInput";
import { GetProposalOutput } from "./GetProposalOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetProposal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetProposal",
  http: {
    method: "GET",
    requestUri: "/networks/{networkId}/proposals/{proposalId}"
  },
  input: {
    shape: GetProposalInput
  },
  output: {
    shape: GetProposalOutput
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
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
