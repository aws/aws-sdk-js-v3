import { VoteOnProposalInput } from "../shapes/VoteOnProposalInput";
import { VoteOnProposalOutput } from "../shapes/VoteOnProposalOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { IllegalActionException } from "../shapes/IllegalActionException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const VoteOnProposal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "VoteOnProposal",
  http: {
    method: "POST",
    requestUri: "/networks/{networkId}/proposals/{proposalId}/votes"
  },
  input: {
    shape: VoteOnProposalInput
  },
  output: {
    shape: VoteOnProposalOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: IllegalActionException
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
