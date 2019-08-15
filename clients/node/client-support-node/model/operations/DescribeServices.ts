import { DescribeServicesInput } from "../shapes/DescribeServicesInput";
import { DescribeServicesOutput } from "../shapes/DescribeServicesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServicesInput
  },
  output: {
    shape: DescribeServicesOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
