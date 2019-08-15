import { ListThingRegistrationTasksInput } from "../shapes/ListThingRegistrationTasksInput";
import { ListThingRegistrationTasksOutput } from "../shapes/ListThingRegistrationTasksOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListThingRegistrationTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThingRegistrationTasks",
  http: {
    method: "GET",
    requestUri: "/thing-registration-tasks"
  },
  input: {
    shape: ListThingRegistrationTasksInput
  },
  output: {
    shape: ListThingRegistrationTasksOutput
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
