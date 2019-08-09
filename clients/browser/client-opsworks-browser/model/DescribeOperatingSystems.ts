import { DescribeOperatingSystemsInput } from "./DescribeOperatingSystemsInput";
import { DescribeOperatingSystemsOutput } from "./DescribeOperatingSystemsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeOperatingSystems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOperatingSystems",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOperatingSystemsInput
  },
  output: {
    shape: DescribeOperatingSystemsOutput
  },
  errors: []
};
