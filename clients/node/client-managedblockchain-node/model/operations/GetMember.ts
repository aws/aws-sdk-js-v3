import { GetMemberInput } from "../shapes/GetMemberInput";
import { GetMemberOutput } from "../shapes/GetMemberOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
