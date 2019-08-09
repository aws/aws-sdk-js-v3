import { UpdateFleetPortSettingsInput } from "./UpdateFleetPortSettingsInput";
import { UpdateFleetPortSettingsOutput } from "./UpdateFleetPortSettingsOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateFleetPortSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFleetPortSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateFleetPortSettingsInput
  },
  output: {
    shape: UpdateFleetPortSettingsOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: InvalidFleetStatusException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
