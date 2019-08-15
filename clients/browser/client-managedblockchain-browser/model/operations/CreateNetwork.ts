import { CreateNetworkInput } from "../shapes/CreateNetworkInput";
import { CreateNetworkOutput } from "../shapes/CreateNetworkOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNetwork: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNetwork",
  http: {
    method: "POST",
    requestUri: "/networks"
  },
  input: {
    shape: CreateNetworkInput
  },
  output: {
    shape: CreateNetworkOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: ResourceAlreadyExistsException
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
