import { DescribeThingRegistrationTaskInput } from "../shapes/DescribeThingRegistrationTaskInput";
import { DescribeThingRegistrationTaskOutput } from "../shapes/DescribeThingRegistrationTaskOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
