import { DescribeThingRegistrationTaskInput } from "./DescribeThingRegistrationTaskInput";
import { DescribeThingRegistrationTaskOutput } from "./DescribeThingRegistrationTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeThingRegistrationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeThingRegistrationTask",
  http: {
    method: "GET",
    requestUri: "/thing-registration-tasks/{taskId}"
  },
  input: {
    shape: DescribeThingRegistrationTaskInput
  },
  output: {
    shape: DescribeThingRegistrationTaskOutput
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
