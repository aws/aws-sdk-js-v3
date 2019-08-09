import { ListProposalVotesInput } from "./ListProposalVotesInput";
import { ListProposalVotesOutput } from "./ListProposalVotesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
