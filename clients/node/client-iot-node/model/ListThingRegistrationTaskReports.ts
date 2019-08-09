import { ListThingRegistrationTaskReportsInput } from "./ListThingRegistrationTaskReportsInput";
import { ListThingRegistrationTaskReportsOutput } from "./ListThingRegistrationTaskReportsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListThingRegistrationTaskReports: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThingRegistrationTaskReports",
  http: {
    method: "GET",
    requestUri: "/thing-registration-tasks/{taskId}/reports"
  },
  input: {
    shape: ListThingRegistrationTaskReportsInput
  },
  output: {
    shape: ListThingRegistrationTaskReportsOutput
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
