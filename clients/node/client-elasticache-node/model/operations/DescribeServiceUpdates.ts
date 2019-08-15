import { DescribeServiceUpdatesInput } from "../shapes/DescribeServiceUpdatesInput";
import { DescribeServiceUpdatesOutput } from "../shapes/DescribeServiceUpdatesOutput";
import { ServiceUpdateNotFoundFault } from "../shapes/ServiceUpdateNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeServiceUpdates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServiceUpdates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServiceUpdatesInput
  },
  output: {
    shape: DescribeServiceUpdatesOutput,
    resultWrapper: "DescribeServiceUpdatesResult"
  },
  errors: [
    {
      shape: ServiceUpdateNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
