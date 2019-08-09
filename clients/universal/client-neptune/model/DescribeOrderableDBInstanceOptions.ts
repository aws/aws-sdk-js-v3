import { DescribeOrderableDBInstanceOptionsInput } from "./DescribeOrderableDBInstanceOptionsInput";
import { DescribeOrderableDBInstanceOptionsOutput } from "./DescribeOrderableDBInstanceOptionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeOrderableDBInstanceOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOrderableDBInstanceOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOrderableDBInstanceOptionsInput
  },
  output: {
    shape: DescribeOrderableDBInstanceOptionsOutput,
    resultWrapper: "DescribeOrderableDBInstanceOptionsResult"
  },
  errors: []
};
