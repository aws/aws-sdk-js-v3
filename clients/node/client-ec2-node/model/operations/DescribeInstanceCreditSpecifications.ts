import { DescribeInstanceCreditSpecificationsInput } from "../shapes/DescribeInstanceCreditSpecificationsInput";
import { DescribeInstanceCreditSpecificationsOutput } from "../shapes/DescribeInstanceCreditSpecificationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInstanceCreditSpecifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstanceCreditSpecifications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstanceCreditSpecificationsInput
  },
  output: {
    shape: DescribeInstanceCreditSpecificationsOutput
  },
  errors: []
};
