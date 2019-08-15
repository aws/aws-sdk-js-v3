import { DescribeNFSFileSharesInput } from "../shapes/DescribeNFSFileSharesInput";
import { DescribeNFSFileSharesOutput } from "../shapes/DescribeNFSFileSharesOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeNFSFileShares: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNFSFileShares",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNFSFileSharesInput
  },
  output: {
    shape: DescribeNFSFileSharesOutput
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
