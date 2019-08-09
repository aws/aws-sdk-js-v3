import { DescribeLoaInput } from "./DescribeLoaInput";
import { DescribeLoaOutput } from "./DescribeLoaOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLoa: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLoa",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLoaInput
  },
  output: {
    shape: DescribeLoaOutput
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
