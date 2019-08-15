import { DescribeDestinationsInput } from "../shapes/DescribeDestinationsInput";
import { DescribeDestinationsOutput } from "../shapes/DescribeDestinationsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDestinations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDestinations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDestinationsInput
  },
  output: {
    shape: DescribeDestinationsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
