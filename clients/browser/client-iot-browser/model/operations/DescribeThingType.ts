import { DescribeThingTypeInput } from "../shapes/DescribeThingTypeInput";
import { DescribeThingTypeOutput } from "../shapes/DescribeThingTypeOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeThingType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeThingType",
  http: {
    method: "GET",
    requestUri: "/thing-types/{thingTypeName}"
  },
  input: {
    shape: DescribeThingTypeInput
  },
  output: {
    shape: DescribeThingTypeOutput
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
