import { ListMembersInput } from "./ListMembersInput";
import { ListMembersOutput } from "./ListMembersOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
