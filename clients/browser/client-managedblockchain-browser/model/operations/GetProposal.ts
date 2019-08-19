import { GetProposalInput } from "../shapes/GetProposalInput";
import { GetProposalOutput } from "../shapes/GetProposalOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
