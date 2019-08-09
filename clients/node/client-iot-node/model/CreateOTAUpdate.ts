import { CreateOTAUpdateInput } from "./CreateOTAUpdateInput";
import { CreateOTAUpdateOutput } from "./CreateOTAUpdateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
