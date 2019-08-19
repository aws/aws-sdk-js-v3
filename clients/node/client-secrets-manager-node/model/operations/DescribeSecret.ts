import { DescribeSecretInput } from "../shapes/DescribeSecretInput";
import { DescribeSecretOutput } from "../shapes/DescribeSecretOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSecret: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSecret",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSecretInput
  },
  output: {
    shape: DescribeSecretOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServiceError
    }
  ]
};
