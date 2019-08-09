import { GetMemberInput } from "./GetMemberInput";
import { GetMemberOutput } from "./GetMemberOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetMember: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetMember",
  http: {
    method: "GET",
    requestUri: "/networks/{networkId}/members/{memberId}"
  },
  input: {
    shape: GetMemberInput
  },
  output: {
    shape: GetMemberOutput
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
