import { DescribeFindingsInput } from "../shapes/DescribeFindingsInput";
import { DescribeFindingsOutput } from "../shapes/DescribeFindingsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFindings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFindings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFindingsInput
  },
  output: {
    shape: DescribeFindingsOutput
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
