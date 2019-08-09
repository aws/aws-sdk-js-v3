import { DescribeEventsInput } from "./DescribeEventsInput";
import { DescribeEventsOutput } from "./DescribeEventsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventsInput
  },
  output: {
    shape: DescribeEventsOutput,
    resultWrapper: "DescribeEventsResult"
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
