import { DescribeUploadBufferInput } from "./DescribeUploadBufferInput";
import { DescribeUploadBufferOutput } from "./DescribeUploadBufferOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
