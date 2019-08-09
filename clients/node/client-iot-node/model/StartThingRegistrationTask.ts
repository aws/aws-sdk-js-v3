import { StartThingRegistrationTaskInput } from "./StartThingRegistrationTaskInput";
import { StartThingRegistrationTaskOutput } from "./StartThingRegistrationTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartThingRegistrationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartThingRegistrationTask",
  http: {
    method: "POST",
    requestUri: "/thing-registration-tasks"
  },
  input: {
    shape: StartThingRegistrationTaskInput
  },
  output: {
    shape: StartThingRegistrationTaskOutput
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
    }
  ]
};
