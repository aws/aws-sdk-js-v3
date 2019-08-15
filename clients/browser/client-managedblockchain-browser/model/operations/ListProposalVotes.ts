import { ListProposalVotesInput } from "../shapes/ListProposalVotesInput";
import { ListProposalVotesOutput } from "../shapes/ListProposalVotesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListProposalVotes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProposalVotes",
  http: {
    method: "GET",
    requestUri: "/networks/{networkId}/proposals/{proposalId}/votes"
  },
  input: {
    shape: ListProposalVotesInput
  },
  output: {
    shape: ListProposalVotesOutput
  },
  errors: [
    {
      shape: InvalidRequestException
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
