import { CreateNodeInput } from "../shapes/CreateNodeInput";
import { CreateNodeOutput } from "../shapes/CreateNodeOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotReadyException } from "../shapes/ResourceNotReadyException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
