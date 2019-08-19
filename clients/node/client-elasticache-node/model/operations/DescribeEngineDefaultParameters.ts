import { DescribeEngineDefaultParametersInput } from "../shapes/DescribeEngineDefaultParametersInput";
import { DescribeEngineDefaultParametersOutput } from "../shapes/DescribeEngineDefaultParametersOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEngineDefaultParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEngineDefaultParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEngineDefaultParametersInput
  },
  output: {
    shape: DescribeEngineDefaultParametersOutput,
    resultWrapper: "DescribeEngineDefaultParametersResult"
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
