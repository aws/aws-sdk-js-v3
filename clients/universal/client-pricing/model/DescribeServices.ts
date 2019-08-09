import { DescribeServicesInput } from "./DescribeServicesInput";
import { DescribeServicesOutput } from "./DescribeServicesOutput";
import { InternalErrorException } from "./InternalErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ExpiredNextTokenException } from "./ExpiredNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
