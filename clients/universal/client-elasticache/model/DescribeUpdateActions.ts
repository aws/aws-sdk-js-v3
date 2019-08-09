import { DescribeUpdateActionsInput } from "./DescribeUpdateActionsInput";
import { DescribeUpdateActionsOutput } from "./DescribeUpdateActionsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
