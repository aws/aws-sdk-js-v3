import { ListMembersInput } from "../shapes/ListMembersInput";
import { ListMembersOutput } from "../shapes/ListMembersOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMembers",
  http: {
    method: "GET",
    requestUri: "/networks/{networkId}/members"
  },
  input: {
    shape: ListMembersInput
  },
  output: {
    shape: ListMembersOutput
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
