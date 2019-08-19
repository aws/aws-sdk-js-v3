import { DescribeLoaInput } from "../shapes/DescribeLoaInput";
import { DescribeLoaOutput } from "../shapes/DescribeLoaOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
