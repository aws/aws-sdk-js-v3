import { DescribeUpdateActionsInput } from "../shapes/DescribeUpdateActionsInput";
import { DescribeUpdateActionsOutput } from "../shapes/DescribeUpdateActionsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUpdateActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUpdateActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUpdateActionsInput
  },
  output: {
    shape: DescribeUpdateActionsOutput,
    resultWrapper: "DescribeUpdateActionsResult"
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
