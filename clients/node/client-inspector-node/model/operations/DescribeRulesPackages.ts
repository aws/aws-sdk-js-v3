import { DescribeRulesPackagesInput } from "../shapes/DescribeRulesPackagesInput";
import { DescribeRulesPackagesOutput } from "../shapes/DescribeRulesPackagesOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRulesPackages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRulesPackages",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRulesPackagesInput
  },
  output: {
    shape: DescribeRulesPackagesOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    }
  ]
};
