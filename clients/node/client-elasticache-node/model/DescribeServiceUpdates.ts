import { DescribeServiceUpdatesInput } from "./DescribeServiceUpdatesInput";
import { DescribeServiceUpdatesOutput } from "./DescribeServiceUpdatesOutput";
import { ServiceUpdateNotFoundFault } from "./ServiceUpdateNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
