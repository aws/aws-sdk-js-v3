import { StartThingRegistrationTaskInput } from "../shapes/StartThingRegistrationTaskInput";
import { StartThingRegistrationTaskOutput } from "../shapes/StartThingRegistrationTaskOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
