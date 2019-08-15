import { UpdateAvailabilityOptionsInput } from "../shapes/UpdateAvailabilityOptionsInput";
import { UpdateAvailabilityOptionsOutput } from "../shapes/UpdateAvailabilityOptionsOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { InvalidTypeException } from "../shapes/InvalidTypeException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DisabledOperationException } from "../shapes/DisabledOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAvailabilityOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAvailabilityOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAvailabilityOptionsInput
  },
  output: {
    shape: UpdateAvailabilityOptionsOutput,
    resultWrapper: "UpdateAvailabilityOptionsResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: InvalidTypeException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DisabledOperationException
    }
  ]
};
