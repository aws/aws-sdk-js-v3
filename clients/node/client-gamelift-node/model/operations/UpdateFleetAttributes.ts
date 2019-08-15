import { UpdateFleetAttributesInput } from "../shapes/UpdateFleetAttributesInput";
import { UpdateFleetAttributesOutput } from "../shapes/UpdateFleetAttributesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { InvalidFleetStatusException } from "../shapes/InvalidFleetStatusException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFleetAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFleetAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateFleetAttributesInput
  },
  output: {
    shape: UpdateFleetAttributesOutput
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
