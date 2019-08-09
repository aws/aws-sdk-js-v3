import { CreateNodeInput } from "./CreateNodeInput";
import { CreateNodeOutput } from "./CreateNodeOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotReadyException } from "./ResourceNotReadyException";
import { ThrottlingException } from "./ThrottlingException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateNode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNode",
  http: {
    method: "POST",
    requestUri: "/networks/{networkId}/members/{memberId}/nodes"
  },
  input: {
    shape: CreateNodeInput
  },
  output: {
    shape: CreateNodeOutput
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
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotReadyException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ResourceLimitExceededException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
