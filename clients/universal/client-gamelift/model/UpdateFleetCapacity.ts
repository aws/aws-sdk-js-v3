import { UpdateFleetCapacityInput } from "./UpdateFleetCapacityInput";
import { UpdateFleetCapacityOutput } from "./UpdateFleetCapacityOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateFleetCapacity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFleetCapacity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateFleetCapacityInput
  },
  output: {
    shape: UpdateFleetCapacityOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidFleetStatusException
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
