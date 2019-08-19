import { DeleteMemberInput } from "../shapes/DeleteMemberInput";
import { DeleteMemberOutput } from "../shapes/DeleteMemberOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceNotReadyException } from "../shapes/ResourceNotReadyException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteMember: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMember",
  http: {
    method: "DELETE",
    requestUri: "/networks/{networkId}/members/{memberId}"
  },
  input: {
    shape: DeleteMemberInput
  },
  output: {
    shape: DeleteMemberOutput
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
      shape: ResourceNotReadyException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
