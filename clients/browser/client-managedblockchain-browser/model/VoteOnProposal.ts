import { VoteOnProposalInput } from "./VoteOnProposalInput";
import { VoteOnProposalOutput } from "./VoteOnProposalOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { IllegalActionException } from "./IllegalActionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
