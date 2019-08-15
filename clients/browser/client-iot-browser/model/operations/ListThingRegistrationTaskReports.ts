import { ListThingRegistrationTaskReportsInput } from "../shapes/ListThingRegistrationTaskReportsInput";
import { ListThingRegistrationTaskReportsOutput } from "../shapes/ListThingRegistrationTaskReportsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
