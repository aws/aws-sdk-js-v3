import { DescribeModelPackageInput } from "../shapes/DescribeModelPackageInput";
import { DescribeModelPackageOutput } from "../shapes/DescribeModelPackageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeModelPackage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeModelPackage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeModelPackageInput
  },
  output: {
    shape: DescribeModelPackageOutput
  },
  errors: []
};
