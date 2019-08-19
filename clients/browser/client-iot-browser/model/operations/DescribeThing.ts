import { DescribeThingInput } from "../shapes/DescribeThingInput";
import { DescribeThingOutput } from "../shapes/DescribeThingOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeThing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeThing",
  http: {
    method: "GET",
    requestUri: "/things/{thingName}"
  },
  input: {
    shape: DescribeThingInput
  },
  output: {
    shape: DescribeThingOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
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
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
