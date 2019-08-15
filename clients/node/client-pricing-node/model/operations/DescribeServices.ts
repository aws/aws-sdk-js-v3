import { DescribeServicesInput } from "../shapes/DescribeServicesInput";
import { DescribeServicesOutput } from "../shapes/DescribeServicesOutput";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ExpiredNextTokenException } from "../shapes/ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServicesInput
  },
  output: {
    shape: DescribeServicesOutput
  },
  errors: [
    {
      shape: InternalErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ExpiredNextTokenException
    }
  ]
};
