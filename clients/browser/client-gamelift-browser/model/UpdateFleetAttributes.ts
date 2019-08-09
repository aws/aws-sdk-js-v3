import { UpdateFleetAttributesInput } from "./UpdateFleetAttributesInput";
import { UpdateFleetAttributesOutput } from "./UpdateFleetAttributesOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
