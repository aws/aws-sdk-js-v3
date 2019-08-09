import { DescribeEngineDefaultParametersInput } from "./DescribeEngineDefaultParametersInput";
import { DescribeEngineDefaultParametersOutput } from "./DescribeEngineDefaultParametersOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
