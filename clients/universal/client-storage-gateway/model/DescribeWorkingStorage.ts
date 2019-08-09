import { DescribeWorkingStorageInput } from "./DescribeWorkingStorageInput";
import { DescribeWorkingStorageOutput } from "./DescribeWorkingStorageOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
