import { UpdateFleetCapacityInput } from "../shapes/UpdateFleetCapacityInput";
import { UpdateFleetCapacityOutput } from "../shapes/UpdateFleetCapacityOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidFleetStatusException } from "../shapes/InvalidFleetStatusException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
