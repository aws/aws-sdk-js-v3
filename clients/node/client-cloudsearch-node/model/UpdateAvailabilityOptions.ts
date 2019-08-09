import { UpdateAvailabilityOptionsInput } from "./UpdateAvailabilityOptionsInput";
import { UpdateAvailabilityOptionsOutput } from "./UpdateAvailabilityOptionsOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { InvalidTypeException } from "./InvalidTypeException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DisabledOperationException } from "./DisabledOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
