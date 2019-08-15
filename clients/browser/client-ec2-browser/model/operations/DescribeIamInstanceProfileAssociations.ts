import { DescribeIamInstanceProfileAssociationsInput } from "../shapes/DescribeIamInstanceProfileAssociationsInput";
import { DescribeIamInstanceProfileAssociationsOutput } from "../shapes/DescribeIamInstanceProfileAssociationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIamInstanceProfileAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIamInstanceProfileAssociations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeIamInstanceProfileAssociationsInput
  },
  output: {
    shape: DescribeIamInstanceProfileAssociationsOutput
  },
  errors: []
};
