import { DescribeSecretInput } from "./DescribeSecretInput";
import { DescribeSecretOutput } from "./DescribeSecretOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
