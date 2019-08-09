import { DescribeDestinationsInput } from "./DescribeDestinationsInput";
import { DescribeDestinationsOutput } from "./DescribeDestinationsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
