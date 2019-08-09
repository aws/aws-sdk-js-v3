import { DescribeCacheInput } from "./DescribeCacheInput";
import { DescribeCacheOutput } from "./DescribeCacheOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCache: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCache",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCacheInput
  },
  output: {
    shape: DescribeCacheOutput
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
