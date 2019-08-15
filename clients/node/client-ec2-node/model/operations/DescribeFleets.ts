import { DescribeFleetsInput } from "../shapes/DescribeFleetsInput";
import { DescribeFleetsOutput } from "../shapes/DescribeFleetsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFleets: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleets",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFleetsInput
  },
  output: {
    shape: DescribeFleetsOutput
  },
  errors: []
};
