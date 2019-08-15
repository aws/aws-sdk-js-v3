import { DescribeWorkingStorageInput } from "../shapes/DescribeWorkingStorageInput";
import { DescribeWorkingStorageOutput } from "../shapes/DescribeWorkingStorageOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeWorkingStorage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeWorkingStorage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeWorkingStorageInput
  },
  output: {
    shape: DescribeWorkingStorageOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
