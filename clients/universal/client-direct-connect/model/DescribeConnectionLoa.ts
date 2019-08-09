import { DescribeConnectionLoaInput } from "./DescribeConnectionLoaInput";
import { DescribeConnectionLoaOutput } from "./DescribeConnectionLoaOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
