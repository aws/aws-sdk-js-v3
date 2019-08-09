import { StopThingRegistrationTaskInput } from "./StopThingRegistrationTaskInput";
import { StopThingRegistrationTaskOutput } from "./StopThingRegistrationTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
