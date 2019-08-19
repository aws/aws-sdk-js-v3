import { DescribeUploadBufferInput } from "../shapes/DescribeUploadBufferInput";
import { DescribeUploadBufferOutput } from "../shapes/DescribeUploadBufferOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeUploadBuffer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUploadBuffer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUploadBufferInput
  },
  output: {
    shape: DescribeUploadBufferOutput
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
