import { DeleteMemberInput } from "./DeleteMemberInput";
import { DeleteMemberOutput } from "./DeleteMemberOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotReadyException } from "./ResourceNotReadyException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
