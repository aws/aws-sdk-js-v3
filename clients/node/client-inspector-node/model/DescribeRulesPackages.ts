import { DescribeRulesPackagesInput } from "./DescribeRulesPackagesInput";
import { DescribeRulesPackagesOutput } from "./DescribeRulesPackagesOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
