import { DescribeCacheInput } from "../shapes/DescribeCacheInput";
import { DescribeCacheOutput } from "../shapes/DescribeCacheOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
