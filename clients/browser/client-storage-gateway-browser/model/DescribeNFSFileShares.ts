import { DescribeNFSFileSharesInput } from "./DescribeNFSFileSharesInput";
import { DescribeNFSFileSharesOutput } from "./DescribeNFSFileSharesOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
