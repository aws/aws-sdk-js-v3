import { DescribeUserStackAssociationsInput } from "./DescribeUserStackAssociationsInput";
import { DescribeUserStackAssociationsOutput } from "./DescribeUserStackAssociationsOutput";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeUserStackAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUserStackAssociations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUserStackAssociationsInput
  },
  output: {
    shape: DescribeUserStackAssociationsOutput
  },
  errors: [
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
