import { CreateOTAUpdateInput } from "../shapes/CreateOTAUpdateInput";
import { CreateOTAUpdateOutput } from "../shapes/CreateOTAUpdateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateOTAUpdate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateOTAUpdate",
  http: {
    method: "POST",
    requestUri: "/otaUpdates/{otaUpdateId}"
  },
  input: {
    shape: CreateOTAUpdateInput
  },
  output: {
    shape: CreateOTAUpdateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
