import { DeleteOTAUpdateInput } from "../shapes/DeleteOTAUpdateInput";
import { DeleteOTAUpdateOutput } from "../shapes/DeleteOTAUpdateOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { VersionConflictException } from "../shapes/VersionConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteOTAUpdate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteOTAUpdate",
  http: {
    method: "DELETE",
    requestUri: "/otaUpdates/{otaUpdateId}"
  },
  input: {
    shape: DeleteOTAUpdateInput
  },
  output: {
    shape: DeleteOTAUpdateOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
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
    },
    {
      shape: VersionConflictException
    }
  ]
};
