import { StopThingRegistrationTaskInput } from "../shapes/StopThingRegistrationTaskInput";
import { StopThingRegistrationTaskOutput } from "../shapes/StopThingRegistrationTaskOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopThingRegistrationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopThingRegistrationTask",
  http: {
    method: "PUT",
    requestUri: "/thing-registration-tasks/{taskId}/cancel"
  },
  input: {
    shape: StopThingRegistrationTaskInput
  },
  output: {
    shape: StopThingRegistrationTaskOutput
  },
  errors: [
    {
      shape: InvalidRequestException
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
      shape: ResourceNotFoundException
    }
  ]
};
