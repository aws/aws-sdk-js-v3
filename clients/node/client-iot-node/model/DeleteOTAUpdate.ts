import { DeleteOTAUpdateInput } from "./DeleteOTAUpdateInput";
import { DeleteOTAUpdateOutput } from "./DeleteOTAUpdateOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { VersionConflictException } from "./VersionConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
