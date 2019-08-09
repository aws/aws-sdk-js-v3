import { DescribeFleetsInput } from "./DescribeFleetsInput";
import { DescribeFleetsOutput } from "./DescribeFleetsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
