import { ListThingRegistrationTasksInput } from "./ListThingRegistrationTasksInput";
import { ListThingRegistrationTasksOutput } from "./ListThingRegistrationTasksOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
