import { DescribeConnectionLoaInput } from "../shapes/DescribeConnectionLoaInput";
import { DescribeConnectionLoaOutput } from "../shapes/DescribeConnectionLoaOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConnectionLoa: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConnectionLoa",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConnectionLoaInput
  },
  output: {
    shape: DescribeConnectionLoaOutput
  },
  errors: [
    {
      shape: DirectConnectServerException
    },
    {
      shape: DirectConnectClientException
    }
  ]
};
